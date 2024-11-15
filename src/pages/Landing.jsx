import React, { useEffect } from "react";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../Redux/Features/ToursSlice";
import Landing1 from "../components/landing/Landing1";
import Landing2 from "../components/landing/Landing2";
import Landing3 from "../components/landing/Landing3";
import RecommentedFlights from "../components/landing/RecommentedFlights";
import Landing4 from "../components/landing/Landing4";
import RecommentedFlights1 from "../components/landing/RecommentedFlights1";
import Testimonial from "../components/landing/Testimonials";


const Landing = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTours())
  }, [])







  return (
    <>
      <Header />
      <Landing1 />
      <Landing2/>
      <Landing3/>
      <RecommentedFlights />
      <Landing4/>
      <RecommentedFlights1/>
      <Testimonial/>
      <Footer/>
    </>
  );
};

export default Landing;
