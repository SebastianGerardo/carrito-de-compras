import React, { useContext } from 'react'
import { ContextShop } from '../context/UserContext'
import CardProductAdded from './CardProductAdded'

export const Cart = () => {
  const { total, setTotal, productsAdded, setProductsAdded } = useContext(ContextShop)

  const handleDeleteProduct = (productInfo) => {
    const newProducts = productsAdded.filter((product) => product.id !== productInfo.id)

    setProductsAdded(newProducts)
    setTotal(total - productInfo.price)
  }

  const handleClearCart = () => {
    setTotal(0)
    setProductsAdded([])
  }

  return (
    <article className='bg-white shadow-xl rounded-md right-0 top-10 absolute w-96 min-h-[8rem] max-h-[16rem] p-4 overflow-y-auto'>
      <div className='flex justify-between mb-2'>
        <h1>Products:</h1>
        <p className='cursor-pointer' onClick={handleClearCart}>Clear all</p>
      </div>
      <div>
        {productsAdded && productsAdded.length > 0 && productsAdded.map(product => (
          <CardProductAdded handleDeleteProduct={handleDeleteProduct} key={product.id} productInfo={product} />
        ))}
      </div>
      <div className='w-full flex justify-end'>
        <p>
          Total: {total}
        </p>
      </div>
    </article>
  )
}
