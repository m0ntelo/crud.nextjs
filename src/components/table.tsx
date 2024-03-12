import Customer from "@/core/Client";
import { IconEdit, IconRemove } from "./icons";

interface TableProps {
  customers: Customer[]
  customerSelected?: (customer: Customer) => void
  customerRemoved?: (customer: Customer) => void
}

export default function Table(props: TableProps) {

  const show = props.customerRemoved || props.customerSelected;

  function header() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        { show ? <th className="p-4">Acoes</th> : false }
      </tr>
    )
  }

  function body() {
    return (
      props.customers?.map((customer, i) => {
        return (
          <tr key={customer.id}
              className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
            <td className="text-left p-4">{customer.id}</td>
            <td className="text-left p-4">{customer.name}</td>
            <td className="text-left p-4">{customer.idade}</td>
            { show ? actions(customer) : false }
          </tr>
        )
      })
    )
  }

  function actions(customer: Customer) {
    return (
      <td className="flex justify-center">
        {props.customerSelected ? (
          <button
            onClick={() => props.customerSelected?.(customer)} 
            className={`
              flex justify-center items-center
              text-green-600 rounded-full p-2 m-1
              hover:bg-purple-50
            `}>
              {IconEdit}
          </button>
        ) : false }
        {props.customerRemoved ? (
          <button
            onClick={() => props.customerRemoved?.(customer)} 
            className={`
              flex justify-center items-center
            text-red-600 rounded-full p-2 m-1
            hover:bg-purple-50
            `}>
              {IconRemove}
          </button>
        ) : false }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {header()}
      </thead>
      <tbody>
        {body()}
      </tbody>
    </table>
  )
}