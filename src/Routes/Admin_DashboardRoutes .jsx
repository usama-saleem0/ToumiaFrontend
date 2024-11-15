import React from "react";
import { Routes, Route } from "react-router-dom";
import Admindashboard1 from "../components/AdminSidebar/Admindashboard1";
import AdminBookings1 from "../components/AdminSidebar/AdminBookings1";
import AdminManageList1 from "../components/AdminSidebar/AdminManageList1";
import AdminPropertyManagement1 from "../components/AdminSidebar/AdminPropertyManagement1";
import AdminBookings1inner from "../components/AdminSidebar/AdminBookings1inner";
import AdminPropertyManagementinner from "../components/AdminSidebar/AdminPropertyManagementinner";

const Admin_DashboardRoutes = () => {
  return (
    // ts
    <Routes>
      <Route path="" element={<Admindashboard1 />} />
      <Route path="AdminBookings1" element={<AdminBookings1 />} />
      <Route
        path="AdminPropertyManagement1"
        element={<AdminPropertyManagement1 />}
      />
      <Route path="AdminManageList1" element={<AdminManageList1 />} />
      <Route path="AdminBookings1inner" element={<AdminBookings1inner />} />
      <Route
        path="AdminPropertyinner/:id"
        element={<AdminPropertyManagementinner />}
      />
    </Routes>
  );
};

export default Admin_DashboardRoutes;
