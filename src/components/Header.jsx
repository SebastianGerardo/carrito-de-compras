import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-4'>
      <nav className='flex items-center justify-between'>
        <Link to='/'>SHOP</Link>
        <ul>
          <li>
            car
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header