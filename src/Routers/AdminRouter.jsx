
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your admin components
  import AdminCustomersPage from '../pages/Admin/AdminCustomersPage';
 //import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
  import AdminproductDetailsPage from '../pages/Admin/AdminproductDetailsPage';
  import AdminOrdersPage from '../pages/Admin/AdminOrdersPage';
import AdminHomePage from '../pages/Admin/AdminHomePage';
function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminHomePage/>} />
          <Route path="/Customers" element={<AdminCustomersPage />} /> 
         {/* <Route path="/Admin/dashboard" element={<AdminDashboardPage />} />  */}
          <Route path="/AdminproductDetails" element={<AdminproductDetailsPage />} />  
         <Route path="/Orders" element={<AdminOrdersPage />} /> 
      </Routes>
      </div>
  );
}

export default AdminRouter;