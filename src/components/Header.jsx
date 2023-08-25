import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../components/Cart'
import { ContextShop } from '../context/UserContext'

const Header = () => {
  const { total, setTotal, productsAdded, setProductsAdded } = useContext(ContextShop)

  const [active, setActive] = useState(false)

  const toogleOpen = () => {
    setActive(!active)
  }

  return (
    <div className='p-4'>
      <nav className='flex items-center justify-between relative'>
        <Link to='/'>SHOP</Link>
        <ul>
          <li onClick={toogleOpen}>
            car
          </li>
        </ul>
      </nav>
      {active && (
        <Cart />
      )}
    </div>
  )
}

export default Header