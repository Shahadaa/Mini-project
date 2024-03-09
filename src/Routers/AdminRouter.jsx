
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your admin components
//  import AdminLoginPage from './pages/Admin/AdminLoginPage';
//  import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
 import AdminproductDetailsPage from '../pages/Admin/AdminproductDetailsPage';
//  import AdminEditProductPage from './pages/Admin/AdminEditProductPage';
import AdminHomePage from '../pages/Admin/AdminHomePage';
function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminHomePage/>} />
          {/* <Route path="/admin/login" element={<AdminLoginPage />} /> */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboardPage />} /> */}
        <Route path="/admin/products/" element={<AdminproductDetailsPage />} />
        {/* <Route path="/admin/products/:productId/edit" element={<AdminEditProductPage />} /> */} */}
      </Routes>
      </div>
  );
}

export default AdminRouter;