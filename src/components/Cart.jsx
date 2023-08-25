import React, { useContext } from 'react'
import { ContextShop } from '../context/UserContext'

export const Cart = () => {

  const { contexto } = useContext(ContextShop)

  console.log(contexto)

  return (
    <article className='bg-white shadow-xl rounded-md right-0 top-10 absolute w-96 min-h-[8rem] max-h-[16rem] p-4 overflow-y-auto'>
      <div className='flex justify-between mb-2'>
        <h1>Products:</h1>
        <p>Clear all</p>
      </div>
    </article>
  )
}
