import React from 'react'

const CardProductAdded = ({ productInfo, handleDeleteProduct }) => {
  return (
    <section className='grid grid-cols-[40%_auto] border rounded-md bg-white'>
      <article className='flex justify-center border-r'>
        <div className='w-20 h-20'>
          <img src={productInfo.image} alt="" className='w-full h-full object-contain' />
        </div>
      </article>
      <article className='flex flex-col justify-between p-1'>
        <div className='flex justify-between gap-1'>
          <h1 className='line-clamp-1'>{productInfo.title}</h1>
          <button onClick={() => handleDeleteProduct(productInfo)}>
            X
          </button>
        </div>
        <div className='flex justify-between'>
          <p>{productInfo.rating.rate}</p>
          <p>{productInfo.price}</p>
        </div>
      </article>
    </section>
  )
}

export default CardProductAdded
