import { Link } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import Card from "../components/Card"

export const ShopHome = () => {
  const [allProducts, setAllProducts] = useState([])

  const getProducts = async () => {
    const fetchApi = await fetch(`https://fakestoreapi.com/products?limit=10`)
    const response = await fetchApi.json()

    setAllProducts(response)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
      <article className="flex flex-wrap justify-center my-4 gap-4">
        {allProducts && allProducts.length > 0 && allProducts.map((product) => (
          <Card key={product.id} productInfo={product} />
        ))}
      </article>
    </div>
  )
}