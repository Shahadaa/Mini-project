import React from 'react'
import './Header.css'



const Header=({onFindYourFavoritesClick})=> {
  return (
    <div className='Brandname'>
      <div className='navbar'>
        </div>
    {/* <div '> */}
    <nav>
       <ul className='nav-list'>
       <li><a href="/ProductDetails">PRODUCT DETAILS</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li><a href="/login">LOGIN</a></li>
        <li><a href='/signup'>SIGNUP</a></li>
        <li><a href="/cart">CART</a></li>


      </ul>
    </nav>
    <h1>LuxeLoom</h1>
    <p className='headparagraph'>BUILD YOUR DREAM AND STAND OUT FROM THE CROWD</p>
    <p1 className='headparagraph1'>Most Popular Cars</p1>
    <div className="Find-Your-Favorites ">
      <button className='Find-Your-Favorites-button' onClick={onFindYourFavoritesClick}>
        Find Your Favorites</button>
    </div>

      <img className='pic'
      src='https://images.lifestyleasia.com/wp-content/uploads/sites/5/2021/10/29090432/lamborghini-aventador-lp-780-4-ultimae-1600x900.jpg'
      alt='img'/>

    </div>
    

     
  )
}


export default Header
