import React, { useEffect } from "react";
import Header from "../mocks/Header";
import Abouthero from "../components/inner-hero/Abouthero";
import Footer from "../mocks/Footer";
import About1 from "../components/About/About1";
import About2 from "../components/About/About2";
import About3 from "../components/About/About3";
import TestimonialSlider from "../components/landing/Testimonials";



const About  = () => {









  return (
    <>
      <Header />
      <Abouthero/>
      <About1/>
      <About2/>
      <About3/>
      <TestimonialSlider/>
      <Footer/>
    </>
  );
};

export default About;
