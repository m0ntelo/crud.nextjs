'use client';

import Button from "@/components/button";
import Form from "@/components/form";
import Layout from "@/components/layout";
import Table from "@/components/table";
import useCustomer from "@/hooks/customer";

export default function HomePage() {

  const { 
    newCustomer, 
    customerSelected, 
    customerRemoved,
    customerSaved,
    customers,
    customer,
    tableShow,
    formShow
  } = useCustomer()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-tr from-purple-500 text-white
    `}>
      <Layout title="Cadastro de Cliente">
        { tableShow ? (
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
            canceled={() => formShow}
            onChange={customerSaved}/>
        )}
      </Layout>
    </div>
  )
}