import React from 'react'
import { Routes, Route } from 'react-router-dom';
 import UserLoginPage from '../../src/pages/User/UserLoginPage';
 import UserSignupPage from '../../src/pages/User/UserSignupPage';
import ProductDetailsPage from '../../src/pages/User/ProductDetailsPage';
 import CartPage from '../../src/pages/User/CartPage';
 import UserHomePage from '../../src/pages/User/UserHomePage';


const UserRouter = () => {
  return (
    <Routes>
  <Route path="/" element={<UserHomePage />} /> 
       <Route path="/user/login" element={<UserLoginPage/>} /> 
        <Route path="/user/signup" element={<UserSignupPage/>} />  
          <Route path="/" element={<UserHomePage/>} /> 
          <Route path="/product/:productId" element={<ProductDetailsPage/>} /> 
          <Route path="/user/cart" element={<CartPage/>} />  
       </Routes>
        
  
  );
}

export default UserRouter