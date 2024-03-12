'use client';

import Input from './input';
import Customer from '@/core/Client';
import Button from './button';
import { useState } from 'react';

interface FormProps {
  customer: Customer;
  canceled?: () => void;
  onChange?: (customer: Customer) => void;
}

export default function Form(props: FormProps) {
  const id = props.customer?.id;
  const [name, setName] = useState(props.customer?.name ?? '');
  const [idade, setIdade] = useState(props.customer?.idade ?? '');

  return (
    <div>
      {id && (
        <Input
          ready 
          text="Código" 
          value={id} 
          className="mb-5" />
      )}
      
      <Input 
        text="Nome" 
        value={name}
        onChange={setName} 
        className="mb-5" />

      <Input 
        text="Idade" 
        value={idade}
        type="number" 
        onChange={setIdade}/>

      <div className="flex justify-end mt-3">
        <Button 
          color="blue"
          className="mr-2"
          onClick={() => props.onChange?.(new Customer(name, +idade, id))}>
            {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button
          color="gray"
          onClick={props.canceled}>
            Cancelar
        </Button>
      </div>
    </div>
  )
}