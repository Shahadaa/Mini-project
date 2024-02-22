
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your admin components
 import AdminLoginPage from './pages/Admin/AdminLoginPage';
 import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import AdminAddProductPage from './pages/Admin/AdminAddProductPage';
 import AdminEditProductPage from './pages/Admin/AdminEditProductPage';
 import AdminHomePage from './pages/Admin/AdminHomePage';

function AdminRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/Home" element={<AdminHomePage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/products/add" element={<AdminAddProductPage />} />
        <Route path="/admin/products/:productId/edit" element={<AdminEditProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AdminRouter;