import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className='Brandname'>
      <nav >
        <ul className='nav-list'>
          <li><a href="/product/:productId">NEWARRIVALS</a></li>
          <li><a href="/user/contact">CONTACT</a></li>
          <li><a href="/user/login">LOGIN</a></li>
          <li><a href="/user/signup">SIGNUP</a></li>
          <li><a href="/user/cart">CART</a></li>
        </ul>
      </nav>
     
      <img
        className='pic' 
        src='\car latest.jpg'
        alt='Luxury Cars'
      />
      <h1 className='brandname'>LuxeLoom</h1>
      <p className='headparagraph'>BUILD YOUR DREAM AND STAND OUT FROM THE CROWD</p>
    </header>
  );
};

export default Header;
