import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onFindYourFavoritesClick }) => {
  return (
    <header className='Brandname'>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li><Link to="/ProductDetails">PRODUCT DETAILS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/signup">SIGNUP</Link></li>
          <li><Link to="/cart">CART</Link></li>
        </ul>
      </nav>
      <h1 className='brand'>LuxeLoom</h1>
      <p className='headparagraph'>BUILD YOUR DREAM AND STAND OUT FROM THE CROWD</p>
      <p1 className='headparagraph1'>Most Popular Cars</p1>
      <div className="Find-Your-Favorites">
        <button className='Find-Your-Favorites-button' onClick={onFindYourFavoritesClick}>
          Find Your Favorites
        </button>
      </div>
      <img
        className='pic'
        src='https://images.lifestyleasia.com/wp-content/uploads/sites/5/2021/10/29090432/lamborghini-aventador-lp-780-4-ultimae-1600x900.jpg'
        alt='Luxury Cars'
      />
    </header>
  );
};

export default Header;
