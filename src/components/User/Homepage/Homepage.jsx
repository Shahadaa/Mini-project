import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div>
       <div className="homepage">
      <h1 className="main-heading">Welcome to LuxeLoom</h1>
     
      <p className="secondary-paragraph">
        Explore our curated selection of the finest luxury cars to elevate your driving experience.
      </p>
      <div className='cars'>
      <img
        className="porsche"
        src='\porsche.jpg'
        alt="Luxury Cars"
      />
      <img
        className="benz"
        src='\benz.jpg'
        alt="Luxury Cars"
      />
      
       <img
        className="bmw"
        src='\bmw.jpg'
        alt="Luxury Cars"
      />
       <img
        className="audi"
        src='\audiCar.jpg'
        alt="Luxury Cars"
      />
        <img
        className="pagani"
        src='\pagani.jpg'
        alt="Luxury Cars"
      />
       {/* <img
        className="lamborghini"
        src='\lamborghini 2.jpg'
        alt="Luxury Cars"
      /> <img
      className="rollsroys"
      src='\rollsRoys.jpg'
      alt="Luxury Cars"
    />
    <img
      className="ferrari"
      src='\Ferrari.jpg'
      alt="Luxury Cars"
    />   */}
    </div>
    </div>
    </div>
  )
}

export default Homepage