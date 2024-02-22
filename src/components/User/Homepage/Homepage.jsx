import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="main-heading">Welcome to LuxeLoom</h1>
      <p className="main-paragraph">
        Build your dream and stand out from the crowd with our luxurious collection of cars.
      </p>
      <p className="secondary-paragraph">
        Explore our curated selection of the finest luxury cars to elevate your driving experience.
      </p>
      <img
        className="homepage-image"
        src="https://images.lifestyleasia.com/wp-content/uploads/sites/5/2021/10/29090432/lamborghini-aventador-lp-780-4-ultimae-1600x900.jpg"
        alt="Luxury Cars"
      />
    </div>
  );
};

export default HomePage;