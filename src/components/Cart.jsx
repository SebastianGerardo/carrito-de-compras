import React, { useContext } from 'react'
import { ContextShop } from '../context/UserContext'
import CardProductAdded from './CardProductAdded'

export const Cart = () => {
  const { productsAdded } = useContext(ContextShop)

  console.log(productsAdded)

  return (
    <article className='bg-white shadow-xl rounded-md right-0 top-10 absolute w-96 min-h-[8rem] max-h-[16rem] p-4 overflow-y-auto'>
      <div className='flex justify-between mb-2'>
        <h1>Products:</h1>
        <p>Clear all</p>
      </div>
      <div>
        {productsAdded && productsAdded.length > 0 && productsAdded.map(product => (
          <CardProductAdded key={product.id} productInfo={product} />
        ))}
      </div>
    </article>
  )
}
