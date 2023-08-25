import { Link } from "react-router-dom"

export const ShopHome = () => {
  return (
    <div>
      <a href="/about">About</a>
      <Link to="/about">
        About Link
      </Link>
    </div>
  )
}