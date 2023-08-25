import { Link } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"

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

  console.log(allProducts)

  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
    </div>
  )
}