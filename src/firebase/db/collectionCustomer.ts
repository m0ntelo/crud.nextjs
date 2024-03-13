import Customer from "@/core/Customer";
import ICustomer from "@/core/ICustomer";
import firebase from "../config";

export default class CollectionCustomer implements ICustomer {
  
  #convert = {
    toFirestore(customer: Customer) {
      return {
        name: customer.name,
        age: customer.age
      }
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions): Customer {
        const data = snapshot.data(options)
        return (
          new Customer(data.name, data.age, snapshot.id)
        )
      }
  }

  async save(customer: Customer): Promise<Customer> {
    if(customer?.id) {
      await this.#collection()
                .doc(customer.id)
                .set(customer)

      return (
        customer
      )
    } else {
      const doc = (await (await this.#collection()
                                    .add(customer))
                                    .get())
                                    .data()
      
      return (
        doc
      )
    }
  }

  async delete(customer: Customer): Promise<void> {
    return (
      this.#collection()
          .doc(customer.id)
          .delete()
    )
  }

  async getAll(): Promise<Customer[]> {
    const query = (await this.#collection()
                              .get())
                              .docs
                              .map(doc => doc.data())
    
    return (
      query
    )
  }

  #collection() {
    return (
      firebase
        .firestore()
        .collection('customers')
        .withConverter(this.#convert)
    )
  }
}