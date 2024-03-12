import Customer from "./Customer";

export default interface ICustomer {
  save(customer: Customer): Promise<Customer>
  delete(customer: Customer): Promise<void>
  getAll(): Promise<Customer[]>
}