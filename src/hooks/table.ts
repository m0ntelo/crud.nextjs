import { useState } from "react";

export default function useTable() {
  const [show, setShow] = useState<'table' | 'form'>('table')

  const showTable = () => setShow('table')
  const showForm = () => setShow('form')

  return {
    formShow: show === 'form',
    tableShow: show === 'table',
    showTable,
    showForm
  }
}