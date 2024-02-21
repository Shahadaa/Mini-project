import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
// import UserLoginPage from '../pages/User/UserLoginPage';
import UserSignupPage from '../pages/User/UserSignupPage';
import UserHomePage from '../pages/User/UserHomePage';
// import ProductDetailsPage from '../pages/User/ProductDetailsPage';
// import CartPage from '../pages/User/CartPage';
// import UserHomePage from '../pages/User/UserHomePage';

function UserRouter() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/user/Home" component={<UserHomePage/>} /> 
         {/* <Route path="/user/login" component={UserLoginPage} /> */}
         <Route path="/user/signup" component={<UserSignupPage/>} />
        {/* <Route path="/user/home" component={UserHomepagePage} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
        <Route path="/cart" component={CartPage} /> */} 
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default UserRouter;

