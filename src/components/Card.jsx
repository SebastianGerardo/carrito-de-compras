import React from 'react'

const Card = ({ productInfo }) => {
  return (
    <section className='grid grid-rows-2 w-60 h-72 border rounded-md p-1'>
      <article>
        <div className='w-[90%] h-full'>
          <img src={productInfo.image} alt="" className='w-full h-full object-contain' />
        </div>
      </article>
      <article className='flex justify-between flex-col p-2'>
        <div className='flex flex-col h-full justify-between gap-4'>
          <h1 className='line-clamp-2'>{productInfo.title}</h1>
          <div className='flex justify-between'>
            <p>{productInfo.category}</p>
            <p>{productInfo.rating.rate}</p>
          </div>
        </div>
        <div className='flex justify-between my-2'>
          <button className='bg-yellow-400 hover:bg-yellow-500 text-white w-max px-2'>
            Add to cart
          </button>
          <p>{productInfo.price}</p>
        </div>
      </article>
    </section>
  )
}

export default Card