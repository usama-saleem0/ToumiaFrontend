import React from "react";
import HeaderButton from "./HeaderButton";
import controlimg from "../../assets/dashboard/controlimg.png";

const Heading = ({ heading, controlimg, btn, onBtnClick }) => {
  return (
    <div className="main-heading">
      <h5>{heading}</h5>
      <div className="heading-button-div">
        {btn && <HeaderButton text={btn} onBtnClick={onBtnClick} />}

        <div className="control-img">
          <img src={controlimg} alt="controlimg" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
