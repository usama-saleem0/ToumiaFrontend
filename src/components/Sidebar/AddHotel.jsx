import React from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import react-tabs CSS

const AddHotel = () => {
  return (
    <section className="AddTour-section">
      <div className="main-customer">
        <Heading heading={"Add Hotel"} controlimg={controlimg} />

        <div className="AddTour-main-box">
          <div className="TourTitle-input-imger">
            <label htmlFor="">Images</label>

            <div className="Images-uploder-input">
              <input type="file" />
              <div className="Images-uploder-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <g clip-path="url(#clip0_157_748)">
                    <path d="M19.1258 48.0001C18.4198 47.6782 18.1632 47.1428 18.1666 46.3578C18.1907 41.0486 18.1787 35.7393 18.1787 30.4301C18.1787 30.2476 18.1787 30.0634 18.1787 29.8276C17.9479 29.8276 17.7654 29.8276 17.5828 29.8276C12.2564 29.8276 6.92995 29.8276 1.6035 29.8276C0.444532 29.8276 0.00195312 29.3817 0.00195312 28.2145C0.00195312 25.4032 0.00195312 22.5936 0.00195312 19.7824C0.00195312 18.6496 0.454864 18.1899 1.57595 18.1899C6.91789 18.1899 12.2598 18.1899 17.6035 18.1899C17.774 18.1899 17.9428 18.1899 18.1804 18.1899C18.1804 17.9747 18.1804 17.794 18.1804 17.6149C18.1804 12.2747 18.1976 6.93279 18.1649 1.59257C18.158 0.559642 18.8021 -0.0136314 19.7733 0.00186249C22.6148 0.0466225 25.4597 0.0173564 28.3029 0.0173564C29.3396 0.0173564 29.8218 0.495945 29.8218 1.52543C29.8235 6.86565 29.8218 12.2059 29.8218 17.5478C29.8218 17.7355 29.8218 17.9214 29.8218 18.1917C30.0215 18.1917 30.1989 18.1917 30.378 18.1917C35.7045 18.1917 41.0309 18.2037 46.3573 18.1796C47.1409 18.1762 47.6799 18.4275 48.0002 19.1385C48.0002 22.3871 48.0002 25.6356 48.0002 28.8859C47.6799 29.5969 47.1409 29.8482 46.3573 29.8448C41.0447 29.8207 35.7337 29.8327 30.4211 29.8327C30.2385 29.8327 30.056 29.8327 29.8218 29.8327C29.8218 30.0668 29.8218 30.2493 29.8218 30.4318C29.8218 35.7428 29.8097 41.052 29.8338 46.363C29.8373 47.1463 29.5841 47.6834 28.8746 48.0053C25.625 48.0001 22.3754 48.0001 19.1258 48.0001Z" fill="black" fill-opacity="0.3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_157_748">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>




          </div>

          <div className="TourTitle-input-box add-new">


            <div className="TourTitle-input-group">
              <label htmlFor="">Title</label>
              <input type="text" />
            </div>


            <div className="TourTitle-input-group">
              <label htmlFor="">Price</label>
              <input type="text" />
            </div>

            <div className="TourTitle-input-group">
              <label htmlFor="">Flighttype  </label>
              <input type="text" />
            </div>


            <div className="TourTitle-input-group">
              <label htmlFor="">Fare Type</label>
              <input type="text" />
            </div>

            <div className="TourTitle-input-group">
              <label htmlFor="">Bagg</label>
              <input type="text" />
            </div>

            <div className="TourTitle-input-group">
              <label htmlFor="">Base Fare</label>
              <input type="text" />
            </div>

            <div className="TourTitle-input-group">
              <label htmlFor="">Total Price</label>
              <input type="text" />
            </div>

            <div className="TourTitle-input-group extara-more">
              <label htmlFor="">About</label>
              <input type="text" />
            </div>
          </div>


<div className="Amenities-box">
  <h2>Amenities</h2>
          <div className="TourTitle-input-check-box">

            <div class="checkbox-wrapper">
              <input id="terms-checkbox-1" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                  <mask fill="white" id="path-1-inside-1_476_5-1">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect mask="url(#path-1-inside-1_476_5-1)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                  <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">Food</span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input id="terms-checkbox-2" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                  <mask fill="white" id="path-1-inside-1_476_5-2">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect mask="url(#path-1-inside-1_476_5-2)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                  <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">Drink</span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input id="terms-checkbox-3" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                  <mask fill="white" id="path-1-inside-1_476_5-3">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect mask="url(#path-1-inside-1_476_5-3)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                  <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">Wifi</span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input id="terms-checkbox-4" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                  <mask fill="white" id="path-1-inside-1_476_5-4">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect mask="url(#path-1-inside-1_476_5-4)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                  <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">Coffee</span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input id="terms-checkbox-5" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                  <mask fill="white" id="path-1-inside-1_476_5-5">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect mask="url(#path-1-inside-1_476_5-5)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                  <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">Air Conditioning</span>
              </label>
            </div>


            <div class="checkbox-wrapper">
              <input id="terms-checkbox-6" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                  <mask fill="white" id="path-1-inside-1_476_5-5">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect mask="url(#path-1-inside-1_476_5-5)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                  <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">Fitness Facility</span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input id="terms-checkbox-7" name="checkbox" type="checkbox" />
              <label class="terms-label" for="terms-checkbox-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                  <mask fill="white" id="path-1-inside-1_476_5-5">
                    <rect height="200" width="200"></rect>
                  </mask>
                  <rect mask="url(#path-1-inside-1_476_5-5)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                  <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">Swimming pool</span>
              </label>
            </div>

          </div>
          </div>


          <div className="TourTitle-btn-box">
                    <button>Upload</button>
                  </div>

        </div>
      </div>
    </section>
  );
};

export default AddHotel;
