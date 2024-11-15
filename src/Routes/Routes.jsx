import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../App";

import Login from "../components/login/Login";
import Landing from "../pages/Landing";
import About from "../pages/About";
import MultiStep from "../components/AR/pages/MultiStep";
import MultiStepmain from "../components/AR/pages/MultiStepmain";
import Profile from "../components/AR/pages/Profile";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Singup from "../components/login/Singup";
import Booking from "../pages/Booking";
import FlightDetails from "../pages/FlightDetails";
import HotelDetails from "../pages/HotelDetails";
import Partnership from "../components/AR/components/Partnership/Partnership";
import PropertyInfo from "../components/AR/components/PropertyInfo/PropertyInfo";
import Properties from "../pages/Properties";
import Admin_DashboardRoutes from "./Admin_DashboardRoutes ";
import Admin_dashboard from "../pages/Admin_dashboard";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51ONGSUJf5CYoJPVsmhVV5W3GMEu0dVMj0RVrroS6aISJLVGYrMLe1D7LziLXPY3WgLsJRZOprKbUQzCb2kbVHWMm00dDxogEMK');



const Routes = () => {

  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/About",
      element: <About />,
    },

    {
      path: "/Flights",
      element: <Flights />,
    },

    {
      path: "/Hotels",
      element: <Hotels />,
    },

    {
      path: "/Contact",
      element: <Contact />,
    },

    {
      path: "/Booking/:id", 
      element: (
        <Elements stripe={stripePromise}>
          <Booking />
        </Elements>
      ),
    },


    {
      path: "/FlightDetails/:id",
      element: <FlightDetails />,
    },

    {
      path: "/HotelDetails",
      element: <HotelDetails />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/dashboard/*",
      element: <Dashboard />,
    },
    {
      path: "Admin_dashboard/*",
      element: <Admin_dashboard />,
    },
    {
      path: "/Partnership",
      element: <Partnership />,
    },
    {
      path: "/Propertyinfo",
      element: <PropertyInfo />,
    },
    {
      path: "/Multistep",
      element: <MultiStep />,
    },
    {
      path: "/Multistepmain",
      element: <MultiStepmain />,
    },
    {
      path: "Multistepmain/profile/*",
      element: <Profile />,
    },

    {
      path: "/Login",
      element: <Login />,
    },

    {
      path: "/Singup",
      element: <Singup />,
    },

    {
      path: "/Properties",
      element: <Properties />,
    },
  ]);
};

export default Routes;
