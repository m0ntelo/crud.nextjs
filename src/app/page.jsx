'use client';

import Button from "@/components/button";
import Form from "@/components/form";
import Layout from "@/components/layout";
import Table from "@/components/table";
import Customer from "@/core/Customer";
import { useState } from "react";

export default function HomePage() {

  const [show, setShow] = useState('table')
  const [customer, setCustomer] = useState(Customer.vazio())

  const customers = [
    new Customer('Ana', '34', '1'),
    new Customer('Bia', '45', '2'),
    new Customer('Carlos', '23', '3'),
    new Customer('Pedro', '54', '4')
  ]

  function customerSelected(customer) {
    setCustomer(customer)
    setShow('form')
  }

  function customerRemoved(customer) {
  }

  function customerSaved(customer) {
    setShow('table')
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