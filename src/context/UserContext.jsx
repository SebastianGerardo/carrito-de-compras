import React, { createContext, useEffect, useState } from 'react'

export const ContextShop = createContext()

const UserContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [productsAdded, setProductsAdded] = useState([])

  const getProducts = async () => {
    const fetchApi = await fetch(`https://fakestoreapi.com/products?limit=10`)
    const response = await fetchApi.json()

    setAllProducts(response)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ContextShop.Provider value={{ allProducts, total, setTotal, productsAdded, setProductsAdded }}>
      {children}
    </ContextShop.Provider>
  )
}

export default UserContext
