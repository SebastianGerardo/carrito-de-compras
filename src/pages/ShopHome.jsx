import Header from "../components/Header"
import { useContext } from "react"
import Card from "../components/Card"
import { ContextShop } from "../context/UserContext"

export const ShopHome = () => {
  const { allProducts, total, setTotal, productsAdded, setProductsAdded } = useContext(ContextShop)

  const handleAddProduct = (product) => {
    setTotal(total + product.price)
    setProductsAdded([...productsAdded, product])
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
      <article className="flex flex-wrap justify-center my-4 gap-4">
        {allProducts && allProducts.length > 0 && allProducts.map((product) => (
          <Card key={product.id} productInfo={product} handleAddProduct={handleAddProduct} />
        ))}
      </article>
    </div>
  )
}