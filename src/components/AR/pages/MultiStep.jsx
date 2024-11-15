import React from "react";
import Header from "../../../mocks/Header";
import Footer from "../../../mocks/Footer";
import Steps from "../components/MultiSteps/Steps";
import Headerfrom from "../../../mocks/Headerfrom";

const MultiStep = () => {
  return (
    <>
      <Headerfrom/>
      <Steps />
      <Footer />
    </>
  );
};

export default MultiStep;
