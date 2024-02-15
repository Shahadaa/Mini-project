import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className='Header'>
      <div className='HeaderBrand'>
        <h1>LuxeLoom</h1>

      <img className='pic'
      src='https://images.lifestyleasia.com/wp-content/uploads/sites/5/2021/10/29090432/lamborghini-aventador-lp-780-4-ultimae-1600x900.jpg'
      alt='img'/>

    </div>
    <div className='headerlinks'>
    <ul className="nav-list">
    <li><a>About</a></li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    <li><a>Contact</a></li>
    <li><a>Categories</a></li>
    <li><a>Latest</a></li>
    <li><a>Login</a></li>
    <li><a>Top Brands</a></li>
    <li><a>Signup</a></li>  
    </ul> 

    </div>
    <div className='headerbuttons'>

    </div></div>
  )
}


export default Header
