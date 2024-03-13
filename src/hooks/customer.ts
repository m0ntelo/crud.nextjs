import Customer from "@/core/Customer"
import ICustomer from "@/core/ICustomer"
import CollectionCustomer from "@/firebase/db/collectionCustomer"
import { useEffect, useState } from "react"
import useTable from "./table"

export default function useCustomer() {

  const fb: ICustomer = new CollectionCustomer()
  const [customer, setCustomer] = useState<Customer>(Customer.vazio())
  const [customers, setCustomers] = useState<Customer[]>([])
  const { tableShow, formShow, showTable, showForm } = useTable()

  useEffect(getAll, [])

  function getAll() {
    fb.getAll().then(customers => {
      setCustomers(customers)
      showTable()
    })
  }

  function customerSelected(customer: Customer): void {
    setCustomer(customer)
    showTable()
  }

  async function customerRemoved(customer: Customer) {
    await fb.delete(customer)
    getAll()
  }

  async function customerSaved(customer: Customer) {
    await fb.save(customer)
    getAll()
  }

  function newCustomer() {
    setCustomer(Customer.vazio())
    showTable()
  }

  return {
    customerSelected,
    customerRemoved,
    customerSaved,
    newCustomer,
    customers,
    customer,
    tableShow,
    formShow
  }
}
