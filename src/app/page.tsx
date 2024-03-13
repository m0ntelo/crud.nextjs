'use client';

import { useEffect, useState } from "react";
import Button from "@/components/button";
import Form from "@/components/form";
import Layout from "@/components/layout";
import Table from "@/components/table";
import Customer from "@/core/Customer";
import ICustomer from "@/core/ICustomer";
import CollectionCustomer from "@/firebase/db/collectionCustomer";

export default function HomePage() {

  const fb: ICustomer = new CollectionCustomer()
  const [show, setShow] = useState<'table' | 'form'>('table')
  const [customer, setCustomer] = useState<Customer>(Customer.vazio())
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(getAll, [])

  function getAll() {
    fb.getAll().then(customers => {
      setCustomers(customers)
      setShow('table')
    })
  }

  function customerSelected(customer: Customer): void {
    setCustomer(customer)
    setShow('form')
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
    setShow('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-tr from-purple-500 text-white
    `}>
      <Layout title="Cadastro de Cliente">
        { show === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                color="gray"
                className="mb-4"
                onClick={newCustomer}>
                Novo Cliente
              </Button>
            </div>
            <Table 
              customers={customers} 
              customerSelected={customerSelected}
              customerRemoved={customerRemoved}>  
            </Table>
          </>
        ) : (
          <Form 
            customer={customer} 
            canceled={() => setShow('table')}
            onChange={customerSaved}/>
        )}
      </Layout>
    </div>
  )
}