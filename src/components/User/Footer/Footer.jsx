import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
          
   Certainly! Below is an example of an "About Us" page for a fictional car dealership:
        Welcome to LuxeLoom, where our passion for cars drives everything we do. Established in 2020, we have been a trusted name in the automotive industry. Our commitment to excellence, customer satisfaction, 
         and a love for all things automotive sets us apart.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/user/ProductDetails">NEWARRIVALS</a></li>
          <li><a href="/user/contact">CONTACT</a></li>
          <li><a href="/user/login">LOGIN</a></li>
          <li><a href="/user/signup">SIGNUP</a></li>
        </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
          
            
            <p>LuxeLoom, England</p>
            <p>Email: luxeloom@example.com</p>
            <p>Phone: 123-456-7890</p>

          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Car Website | LUXE LOOM
      </div>
    </footer>

    </div>
  )
}

export default Footer