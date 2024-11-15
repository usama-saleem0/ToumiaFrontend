import React from "react";
import Steps from "../components/MultiSteps/Steps";
import Footer from "../../../mocks/Footer";
import MainStep from "../components/MultiSteps/MainStep";
import Headerfrom from "../../../mocks/Headerfrom";

const MultiStepmain = () => {
  return (
    <>
   <Headerfrom/>
      <MainStep />
      <Footer />
    </>
  );
};

export default MultiStepmain;
