import React from 'react'
import Header from '../../components/Admin/Header/Header'
import AdminSidebar from '../../components/Admin/AdminSidebar/AdminSidebar'
 import PieChart from '../../components/Admin/PieChart/PieChart'


function AdminHomePage() {
  return (
    <div>
      <Header/>
      <AdminSidebar/>
       <PieChart/> 
    </div>
  )
}

export default AdminHomePage