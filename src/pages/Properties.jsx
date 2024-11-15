import React, { useEffect } from "react";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../Redux/Features/ToursSlice";
import Properties1 from "../components/inner-hero/Properties1";
import Properties2 from "../components/Properties/Properties2";



const Properties = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTours())
  }, [])







  return (
    <>
      <Header />
      <Properties1/>
      <Properties2/>
      <Footer/>
    </>
  );
};

export default Properties;
