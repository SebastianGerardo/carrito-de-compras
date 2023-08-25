import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [active, setActive] = useState(false)

  const toogleOpen = () => {
    setActive(!active)
  }

  return (
    <div className='p-4'>
      <nav className='flex items-center justify-between'>
        <Link to='/'>SHOP</Link>
        <ul>
          <li onClick={toogleOpen}>
            car
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header