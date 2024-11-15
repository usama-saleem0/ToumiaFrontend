import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import dashboardimg from "../../assets/sidebar/dashboardimg.png";
import customerimg from "../../assets/sidebar/customerimg.png";
import bookingimg from "../../assets/sidebar/bookingimg.png";
import destinationimg from "../../assets/sidebar/destinationimg.png";
import tourimg from "../../assets/sidebar/tourimg.png";
// import iconavatar from "../../assets/Images/Avatar.png"
// import iconphone from "../../assets/Images/Smartphone.png"
// import iconHeart from "../../assets/Images/Heart.png"
// import iconCart from "../../assets/Images/iconcart.png"
// import iconBox from "../../assets/Images/icon (1).png"

const SidebarContainer = styled.div`
  width: 250px;

  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const SidebarItem = styled.div`
  cursor: pointer;
  color: ${(props) =>
    props.active ? "#FF7F47" : "#fff"}; /* Active tab color */

  .side-bar-item-child {
    color: inherit;
    display: flex;
    align-items: center;
  }

  .side-nav-pic svg {
    fill: currentColor; /* Use currentColor to match text color */
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 768);

      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [index, setindex] = useState(0);

  const handleChangeIndex = (p) => {
    if (window.innerWidth <= 768) {
      setindex(p);
      setIsOpen(!isOpen);
    } else {
      setindex(p);
    }
  };

  return (
    <>
      {showButton && (
        <div className="ahti" style={{ position: "fixed", top: "0" }}>
          {/* <input class="label-check" id="label-check" type="checkbox"  onClick={()=>{toggleSidebar()}}/>
    <label for="label-check" class="hamburger-label">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    <label></label></label> */}
          {/* <input
            type="checkbox"
            id="checkbox"
            onClick={() => {
              toggleSidebar();
            }}
          />
          <label for="checkbox" class="toggle">
            <div class="bars" id="bar1"></div>
            <div class="bars" id="bar2"></div>
            <div class="bars" id="bar3"></div>
          </label> */}
          <label class="hamburger">
            <input
              id="checkbox"
              onClick={() => {
                toggleSidebar();
              }}
              type="checkbox"
            />
            <svg viewBox="0 0 32 32">
              <path
                class="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      )}

      <div
        className="side-bar-container-thiviyo"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="fix-side-box">
          <Link
            to=""
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >
            <SidebarItem active={index === 0}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_150_3454)">
                      <path
                        d="M10.8984 18.8906H3.63281C1.62968 18.8906 0 20.5203 0 22.5234V27.3672C0 29.3703 1.62968 31 3.63281 31H10.8984C12.9016 31 14.5312 29.3703 14.5312 27.3672V22.5234C14.5312 20.5203 12.9016 18.8906 10.8984 18.8906ZM12.1094 27.3672C12.1094 28.0349 11.5661 28.5781 10.8984 28.5781H3.63281C2.9651 28.5781 2.42188 28.0349 2.42188 27.3672V22.5234C2.42188 21.8557 2.9651 21.3125 3.63281 21.3125H10.8984C11.5661 21.3125 12.1094 21.8557 12.1094 22.5234V27.3672ZM27.3672 0H20.1016C18.0984 0 16.4688 1.62968 16.4688 3.63281V8.47656C16.4688 10.4797 18.0984 12.1094 20.1016 12.1094H27.3672C29.3703 12.1094 31 10.4797 31 8.47656V3.63281C31 1.62968 29.3703 0 27.3672 0ZM28.5781 8.47656C28.5781 9.14427 28.0349 9.6875 27.3672 9.6875H20.1016C19.4339 9.6875 18.8906 9.14427 18.8906 8.47656V3.63281C18.8906 2.9651 19.4339 2.42188 20.1016 2.42188H27.3672C28.0349 2.42188 28.5781 2.9651 28.5781 3.63281V8.47656ZM27.3672 14.0469H20.1016C18.0984 14.0469 16.4688 15.6766 16.4688 17.6797V27.3672C16.4688 29.3703 18.0984 31 20.1016 31H27.3672C29.3703 31 31 29.3703 31 27.3672V17.6797C31 15.6766 29.3703 14.0469 27.3672 14.0469ZM28.5781 27.3672C28.5781 28.0349 28.0349 28.5781 27.3672 28.5781H20.1016C19.4339 28.5781 18.8906 28.0349 18.8906 27.3672V17.6797C18.8906 17.012 19.4339 16.4688 20.1016 16.4688H27.3672C28.0349 16.4688 28.5781 17.012 28.5781 17.6797V27.3672ZM10.8984 0H3.63281C1.62968 0 0 1.62968 0 3.63281V13.3203C0 15.3234 1.62968 16.9531 3.63281 16.9531H10.8984C12.9016 16.9531 14.5312 15.3234 14.5312 13.3203V3.63281C14.5312 1.62968 12.9016 0 10.8984 0ZM12.1094 13.3203C12.1094 13.988 11.5661 14.5312 10.8984 14.5312H3.63281C2.9651 14.5312 2.42188 13.988 2.42188 13.3203V3.63281C2.42188 2.9651 2.9651 2.42188 3.63281 2.42188H10.8984C11.5661 2.42188 12.1094 2.9651 12.1094 3.63281V13.3203Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_150_3454">
                        <rect width="31" height="31" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>{" "}
                Dashboard
              </div>
            </SidebarItem>
          </Link>

          <Link
            className="none-list"
            to="customerdetails"
            onClick={() => handleChangeIndex(1)}
          >
            <SidebarItem active={index === 1}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M26.1562 3.875H22.2812V2.90625C22.2812 2.64932 22.1792 2.40292 21.9975 2.22124C21.8158 2.03956 21.5694 1.9375 21.3125 1.9375C21.0556 1.9375 20.8092 2.03956 20.6275 2.22124C20.4458 2.40292 20.3438 2.64932 20.3438 2.90625V3.875H10.6562V2.90625C10.6562 2.64932 10.5542 2.40292 10.3725 2.22124C10.1908 2.03956 9.94443 1.9375 9.6875 1.9375C9.43057 1.9375 9.18417 2.03956 9.00249 2.22124C8.82081 2.40292 8.71875 2.64932 8.71875 2.90625V3.875H4.84375C4.07296 3.875 3.33375 4.18119 2.78872 4.72622C2.24369 5.27125 1.9375 6.01046 1.9375 6.78125V26.1562C1.9375 26.927 2.24369 27.6663 2.78872 28.2113C3.33375 28.7563 4.07296 29.0625 4.84375 29.0625H26.1562C26.927 29.0625 27.6663 28.7563 28.2113 28.2113C28.7563 27.6663 29.0625 26.927 29.0625 26.1562V6.78125C29.0625 6.01046 28.7563 5.27125 28.2113 4.72622C27.6663 4.18119 26.927 3.875 26.1562 3.875ZM4.84375 5.8125H26.1562C26.4132 5.8125 26.6596 5.91456 26.8413 6.09624C27.0229 6.27792 27.125 6.52432 27.125 6.78125V9.6875H3.875V6.78125C3.875 6.52432 3.97706 6.27792 4.15874 6.09624C4.34042 5.91456 4.58682 5.8125 4.84375 5.8125ZM26.1562 27.125H4.84375C4.58682 27.125 4.34042 27.0229 4.15874 26.8413C3.97706 26.6596 3.875 26.4132 3.875 26.1562V11.625H27.125V26.1562C27.125 26.4132 27.0229 26.6596 26.8413 26.8413C26.6596 27.0229 26.4132 27.125 26.1562 27.125Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.7148 14.7647L13.6117 19.996L11.339 17.7243C11.1563 17.5478 10.9116 17.4501 10.6576 17.4523C10.4036 17.4546 10.1606 17.5564 9.98101 17.7361C9.80139 17.9157 9.69951 18.1586 9.6973 18.4126C9.6951 18.6666 9.79274 18.9114 9.96921 19.0941L12.8755 22.0003C13.048 22.1726 13.2792 22.2735 13.5229 22.2829C13.7666 22.2922 14.0048 22.2093 14.19 22.0507L20.9713 16.2382C21.0734 16.1572 21.1581 16.0565 21.2203 15.9421C21.2826 15.8276 21.3211 15.7018 21.3336 15.5721C21.3461 15.4424 21.3323 15.3115 21.2931 15.1873C21.2538 15.063 21.1899 14.948 21.1051 14.849C21.0204 14.7501 20.9165 14.6692 20.7998 14.6113C20.6831 14.5534 20.5559 14.5197 20.4258 14.5121C20.2958 14.5045 20.1655 14.5232 20.0428 14.5671C19.9202 14.611 19.8076 14.6792 19.7119 14.7676L19.7148 14.7647Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Bookings
              </div>
            </SidebarItem>
          </Link>

          <Link
            className="none-list"
            to="AddTour"
            onClick={() => handleChangeIndex(2)}
          >
            <SidebarItem active={index === 2}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.5 13.002C15.776 13.002 16 12.778 16 12.502C16 12.226 15.776 12.002 15.5 12.002H8.5C8.224 12.002 8 12.226 8 12.502V19.502C8 19.778 8.224 20.002 8.5 20.002H11.5C11.776 20.002 12 19.778 12 19.502C12 19.226 11.776 19.002 11.5 19.002H9V13.002H15.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.0004 23.002H4.00045V11.502C4.00045 11.226 3.77645 11.002 3.50045 11.002H1.70745L11.5004 1.208C11.7644 0.944 12.2344 0.943 12.4994 1.208L16.1464 4.855C16.2904 4.998 16.5044 5.043 16.6914 4.963C16.8784 4.887 17.0004 4.703 17.0004 4.502V1.002H20.0004V8.502C20.0004 8.635 20.0524 8.762 20.1464 8.856L22.2924 11.002H20.4994C20.2234 11.002 19.9994 11.226 19.9994 11.502V12.002C19.9994 12.278 20.2234 12.502 20.4994 12.502C20.7754 12.502 20.9994 12.278 20.9994 12.002H23.4994C23.7014 12.002 23.8844 11.88 23.9614 11.693C24.0394 11.506 23.9964 11.291 23.8534 11.148L20.9994 8.294V0.5C20.9994 0.224 20.7754 0 20.4994 0H16.4994C16.2234 0 15.9994 0.224 15.9994 0.5V3.293L13.2064 0.5C12.5634 -0.144 11.4394 -0.145 10.7934 0.5L0.146445 11.148C0.00344516 11.291 -0.0395548 11.506 0.0384452 11.693C0.115445 11.88 0.298445 12.002 0.500445 12.002H3.00045V23.502C3.00045 23.778 3.22445 24.002 3.50045 24.002H14.0004C14.2764 24.002 14.5004 23.778 14.5004 23.502C14.5004 23.226 14.2764 23.002 14.0004 23.002Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.5 13.002C15.467 13.002 13 15.469 13 18.502C13 21.535 15.467 24.002 18.5 24.002C21.533 24.002 24 21.535 24 18.502C24 15.469 21.533 13.002 18.5 13.002ZM18.5 23.002C16.019 23.002 14 20.983 14 18.502C14 16.021 16.019 14.002 18.5 14.002C20.982 14.002 23 16.021 23 18.502C23 20.983 20.981 23.002 18.5 23.002Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.5 18.002H19V16.502C19 16.226 18.776 16.002 18.5 16.002C18.224 16.002 18 16.226 18 16.502V18.002H16.5C16.224 18.002 16 18.226 16 18.502C16 18.778 16.224 19.002 16.5 19.002H18V20.502C18 20.778 18.224 21.002 18.5 21.002C18.777 21.002 19 20.778 19 20.502V19.002H20.5C20.777 19.002 21 18.778 21 18.502C21 18.226 20.776 18.002 20.5 18.002Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Add Property
              </div>
            </SidebarItem>
          </Link>
          <Link
            className="none-list"
            to="Favorites"
            onClick={() => handleChangeIndex(3)}
          >
            <SidebarItem active={index === 3}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="23"
                    viewBox="0 0 27 23"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_150_2795)">
                      <path
                        d="M13.5261 3.11967C13.8853 2.74247 14.1893 2.38379 14.5327 2.0688C16.7203 0.0650008 19.2669 -0.498816 22.0351 0.447496C24.7875 1.38851 26.439 3.41349 26.8951 6.32389C27.2804 8.78033 26.6002 10.9562 24.857 12.7337C21.7782 15.873 18.6771 18.9899 15.5774 22.1081C14.403 23.29 12.648 23.3019 11.4762 22.1253C8.3306 18.9621 5.15876 15.8241 2.07211 12.6026C0.0195851 10.4585 -0.482405 7.83534 0.452109 5.04008C1.37876 2.2713 3.37624 0.60367 6.244 0.135147C8.70808 -0.268524 10.8668 0.447496 12.6611 2.221C12.9416 2.49762 13.2076 2.78879 13.5261 3.11967ZM7.41051 1.68233C6.89934 1.76571 6.37507 1.8041 5.87701 1.93909C1.69332 3.06937 0.302692 8.39784 3.3841 11.5478C6.44585 14.6779 9.54167 17.7749 12.6257 20.8839C13.1526 21.4159 13.88 21.4199 14.4069 20.8891C17.5041 17.767 20.6064 14.6514 23.6865 11.5134C25.047 10.1277 25.5438 8.41372 25.2279 6.50918C24.8701 4.35583 23.6393 2.82717 21.6052 2.0913C19.5487 1.34748 17.601 1.67307 15.9076 3.1157C15.2956 3.63716 14.7556 4.2473 14.1828 4.81641C13.7516 5.24523 13.2863 5.24788 12.8603 4.82038C12.4003 4.35847 11.9441 3.8926 11.4841 3.43202C10.3582 2.30438 9.00298 1.73924 7.41051 1.68233Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_150_2795">
                        <rect width="27" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                My Favorites
              </div>
            </SidebarItem>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
