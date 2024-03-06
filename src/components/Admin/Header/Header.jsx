import React from 'react'
import './Header.css'
function Header() {
  return (

    <div className='AdminHeader'>
      <nav >
        <ul className='ADMINnav-list'>
          <>ECOMMERCE ADMIN</>
          <button className='logout-button'>Logout</button>

        </ul>
      </nav>
    </div>
  )
}

export default Header