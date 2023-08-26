import React, { createContext, useEffect, useState } from 'react'

export const ContextShop = createContext()

const UserContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [productsAdded, setProductsAdded] = useState([])

  const getProducts = async () => {
    const fetchApi = await fetch(`https://fakestoreapi.com/products?limit=20`)
    const response = await fetchApi.json()

    setAllProducts(response)
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  //GUIARSE DE AQUÍ
  //   const newProducts = productsAdded.filter((product) => product.id !== productInfo.id)

  console.log(allProducts)

  //1. Traer los diez primeros productos del 'AllProducts'
  //2. Filtrar todos los productos que tengan un precio menor a 100
  //3. Filtrar todos los productor que estén en la categoría de 'men\'s clothing'

  return (
    <ContextShop.Provider value={{ allProducts, setAllProducts, total, setTotal, productsAdded, setProductsAdded }}>
      {children}
    </ContextShop.Provider>
  )
}

export default UserContext
