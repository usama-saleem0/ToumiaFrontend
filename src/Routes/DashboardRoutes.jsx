import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerDetails from "../components/Sidebar/CustomerDetails";
import Dashboard1 from "../components/Sidebar/Dashboard1";
import AddTour from "../components/Sidebar/AddTour";
import AddFlights from "../components/Sidebar/AddFlights";
import AddHotel from "../components/Sidebar/AddHotel";
import Favorites from "../components/Sidebar/Favorites";
import Steps from "../components/AR/components/MultiSteps/Steps";


const DashboardRoutes = () => {
  return (
    // ts
    <Routes>
         <Route path="" element={<Dashboard1 />} />
      <Route path="customerdetails" element={<CustomerDetails />} />
      <Route path="AddTour" element={<Steps />} />
      <Route path="AddFlights" element={<AddFlights />} />
      <Route path="AddHotel" element={<AddHotel />} />
      <Route path="Favorites" element={<Favorites />} />
    </Routes>
  );
};

export default DashboardRoutes;
