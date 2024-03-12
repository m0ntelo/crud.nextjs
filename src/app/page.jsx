import Button from "@/components/button";
import Layout from "@/components/layout";
import Table from "@/components/table";
import Customer from "@/core/Client";

export default function HomePage() {

  const customers = [
    new Customer('Ana', '34', '1'),
    new Customer('Bia', '45', '2'),
    new Customer('Carlos', '23', '3'),
    new Customer('Pedro', '54', '4')
  ]

  function customerSelected(customer) {
    // console.log(customer, 'aqui 1')
  }

  function customerRemoved(customer) {
    // console.log(customer, 'aqui 2')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-tr from-purple-500 text-white
    `}>
      <Layout title="Cadastro de Cliente">
        <div className="flex justify-end">
          <Button
            color="gray"
            className="mb-4">
            Novo Cliente
          </Button>
        </div>
        <Table 
          customers={customers} 
          customerSelected={customerSelected()}
          customerRemoved={customerRemoved()}>  
        </Table>
      </Layout>
    </div>
  )
}