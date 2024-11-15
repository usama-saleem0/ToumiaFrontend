import { configureStore } from "@reduxjs/toolkit";
 
 import toursReducer from "./Features/ToursSlice";
 import vendorReducer from "./Features/VendorSlice";

 
export const store = configureStore({
  reducer: {  
 
    tours: toursReducer,
    vendorinfo: vendorReducer
  },
});  
