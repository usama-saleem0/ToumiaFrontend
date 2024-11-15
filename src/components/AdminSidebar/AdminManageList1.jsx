// import React from "react";
// import Heading from "../SidebarHeading/Heading";
// import controlimg from "../../assets/control/controlimg.png";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css"; // Import react-tabs CSS
// import card1 from "../../assets/dashboard/property.png";
// import update from "../../assets/dashboard/update.png";
// import name from "../../assets/dashboard/name.png";
// import phone from "../../assets/dashboard/phone.png";
// import email from "../../assets/dashboard/email.png";
// import Arrow from "../../assets/dashboard/Arrow.png";

// const AdminManageList1 = () => {
//   const data = [
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//     {
//       name: "John Smith",
//       companyName: "Dummy Travel",
//       telegramID: "273876386",
//       tokenName: "Bitcoin",
//       coinUrl: "Link",
//     },
//   ];

//   return (
//     <section className="AddTour-section">
//       <div className="main-customer">
//         <Heading heading={"Manage Listing"} controlimg={controlimg} />
//         <div className="manage-list-table-ar">
//           <div className="manage-list-table">
//             <div className="table-wrapper2">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Company Name</th>
//                     <th>Telegram ID</th>
//                     <th>Token Name</th>
//                     <th>Coin URL</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.name}</td>
//                       <td>{item.companyName}</td>
//                       <td>{item.telegramID}</td>
//                       <td>{item.tokenName}</td>
//                       <td>
//                         <a href="#">{item.coinUrl}</a>
//                       </td>
//                       <td>
//                         <div className="status-btn-padding">
//                           <button className="accept-btn-ar">Accept</button>
//                           <button className="cancel-btn-ar">Cancel</button>
//                           <button className="pending-btn-ar">Pending</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminManageList1;


import React, {useEffect} from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import react-tabs CSS

import { useDispatch, useSelector } from 'react-redux';
import { fetchVendorPartnerShip } from '../../Redux/Features/VendorSlice'; 
import Loader from "../../mocks/Loader";


const AdminManageList1 = () => {
  const dispatch = useDispatch();

  const { vendorData, loading, error } = useSelector((state) => state.vendorinfo);

  // Fetch the data when the component mounts
  useEffect(() => {
    dispatch(fetchVendorPartnerShip());
  }, [dispatch]);

  if (loading) {
    // <p>Loading...</p>;
    return(

      <Loader/>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="AddTour-section">
      <div className="main-customer">
        <Heading heading={"Manage Listing"} controlimg={controlimg} />
        <div className="top-padding-dash-inner-sec">
          <div className="manage-list-table-ar">
            <div className="manage-list-table">
              <div className="table-wrapper2">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Company Name</th>
                      <th>Telegram ID</th>
                      <th>Token Name</th>
                      <th>Coin URL</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Array.isArray(vendorData) && vendorData.length > 0 ? (
                    vendorData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.fullName}</td>
                        <td>{data.companyName}</td>
                        <td>{data.telegramID}</td>
                        <td>{data.tokenNamenetworkName}</td>
                        <td>
                          <a href="#">{data.coinMarketCapURL}</a>
                        </td>
                        <td>
                          <div className="status-btn-padding">
                            <button className="accept-btn-ar">Accept</button>
                            <button className="cancel-btn-ar">Cancel</button>
                            <button className="pending-btn-ar">Pending</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No data available</td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminManageList1;
