
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import your components
// import UserLoginPage from '../pages/User/UserLoginPage';
// import UserSignupPage from '../pages/User/UserSignupPage';
// import ProductDetailsPage from '../pages/User/ProductDetailsPage';
// import CartPage from '../pages/User/CartPage';
 import UserHomePage from '../pages/User/UserHomePage';

function UserRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<UserHomePage />} /> 
        {/* <Route path="/user/login" element={<UserLoginPage />} /> */}
         {/* <Route path="/user/signup" element={<UserSignupPage />} />  */}
        {/* <Route path="/user/home" element={<UserHomepagePage />} /> */}
        {/* <Route path="/product/:productId" element={<ProductDetailsPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default UserRouter;