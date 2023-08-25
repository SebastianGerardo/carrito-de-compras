import Header from "../components/Header"
import { useContext, useEffect, useState } from "react"
import Card from "../components/Card"
import { ContextShop } from "../context/UserContext"

export const ShopHome = () => {
  const {allProducts} = useContext(ContextShop)

  return (
    <div className="max-w-[1200px] mx-auto">
      <Header allProducts={allProducts}  />
      <article className="flex flex-wrap justify-center my-4 gap-4">
        {allProducts && allProducts.length > 0 && allProducts.map((product) => (
          <Card key={product.id} productInfo={product} />
        ))}
      </article>
    </div>
  )
}