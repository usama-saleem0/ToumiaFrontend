import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import Properties from "../../pages/Properties";


export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('userData');
  return user ? JSON.parse(user) : null;
};



export const saveVendorPropertyaccess = createAsyncThunk(
  'vendorpropertyaccess',
  async (formData, { rejectWithValue }) => {
    try {
      // Get the userId from local storage
      const user = getUserFromLocalStorage();

      console.log('User' ,  user)
      if (!user || !user._id) {
      console.error('User ID not found in local storage');
        throw new Error('User ID not found in local storage');
      }

      // Include userId in formData
      const dataToSubmit = {
        ...formData,
        userId: user._id, // Add userId to the formData
      };

      const response = await axios.post(`${baseurl}/Vendor_Property/${user._id}`, dataToSubmit);
      
      // if (response.data.user) {
      //   localStorage.setItem('userData', JSON.stringify(response.data.user));
      // }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Error saving vendor info');
    }
  }
);


export const saveVendorInfo = createAsyncThunk(
  'vendorinfo',
  async (formData, { rejectWithValue }) => {

    const user = getUserFromLocalStorage();

    console.log('User' ,  user)
    if (!user || !user._id) {
    console.error('User ID not found in local storage');
      throw new Error('User ID not found in local storage');
    }
    const dataToSubmit = {
      ...formData,
      userId: user._id, // Add userId to the formData
    };
    
    try {
        const response = await axios.post(`${baseurl}/Vendor_basicinfo/${user._id}`, dataToSubmit);
      return response.data;
    } catch (error) {
      
      return rejectWithValue(error.response.data || 'Error saving vendor info');
    }
  }
);

export const saveVendorPartnerShip = createAsyncThunk(
    'vendorpartnership',
    async (formData, { rejectWithValue }) => {
      try {
          const response = await axios.post(`${baseurl}/Vender_PartnerShip`, formData);
        return response.data;
      } catch (error) {
        
        return rejectWithValue(error.response.data || 'Error saving vendor info');
      }
    }
  );


  export const fetchVendorPartnerShip = createAsyncThunk(
    'getvendorpartnership',
    async (_, { rejectWithValue }) => { 
      try {
        const response = await axios.get(`${baseurl}/vendorpartnership`);
        return response.data.data;  // Access the 'data' array here
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error fetching vendor info';
        return rejectWithValue(errorMessage);
      }
    }
  );

// find all Tours  for Admin dashboard 
  export const fetchVendorProperty = createAsyncThunk(
    'getvendorproperties',
    async (_, { rejectWithValue }) => { 
      try {
        const response = await axios.get(`${baseurl}/get_VendorInfoAll`);
        return response.data.data;  // Access the 'data' array here
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error fetching vendor info';
        return rejectWithValue(errorMessage);
      }
    }
  );
// find all Tours by id  for Admin dashboard 
  export const fetchVendorPropertyById = createAsyncThunk(
    'fetchVendorPropertyById',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${baseurl}/getVendorInfo/${id}`);
        return response.data;  // Send the fetched data to the reducer
      } catch (error) {
        return rejectWithValue(error.response.data);  // Handle errors
      }
    }
  );




export const saveVendorPorpertyinfo = createAsyncThunk(
    'Vender_Propertyinfo',
    async (formData, { rejectWithValue }) => {
      try {
          const response = await axios.post(`${baseurl}/Vender_Propertyinfo`, formData);
        return response.data;
      } catch (error) {
        
        return rejectWithValue(error.response.data || 'Error saving vendor info');
      }
    }
  );


  export  const postFlightData = createAsyncThunk (
    'PostFlighSearch',
   async (flightData,  { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseurl}/PostFlights`, flightData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("Flight Data Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error posting flight data:", error.response?.data || error.message);
        return rejectWithValue(error.response.data);  // Handle errors

    }
});


export const postFlightStatic = createAsyncThunk(
  'postFlightStatic',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/PostFlightsstactic`);
      console.log("Response from backend:", response.data);
      return response.data.duffelResponse?.data?.offers || [];
    } catch (error) {
      console.error("Error posting flight data:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);



// Define the slice


export const vendorSlice = createSlice({
  name: 'vendorinfo',
  initialState: {
    AllVendors: [],    
    vendorData: null,       // Data for fetching by ID
    vendorDataAll: [],    
    loading: false,    
    error: null,       
    success: false,  
    user: getUserFromLocalStorage(),  
  },
  reducers: {
    
    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(saveVendorInfo.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      
      .addCase(saveVendorInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.AllVendors.push(action.payload); 
      })
      
      .addCase(saveVendorInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to save vendor info';
      })


      .addCase(saveVendorPartnerShip.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      
      .addCase(saveVendorPartnerShip.fulfilled, (state, action) => {
        state.loading = false;
        state.AllVendors.push(action.payload); 
      })
      
      .addCase(saveVendorPartnerShip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to save vendor info';
      })

      .addCase(saveVendorPropertyaccess.pending, (state) => {
        state.loading = true;
        state.success = false; 
        state.error = null; 
      })
      
      .addCase(saveVendorPropertyaccess.fulfilled, (state, action) => {
        state.loading = false;
        state.AllVendors.push(action.payload); 
        state.success = true; 
      })
      
      .addCase(saveVendorPropertyaccess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to save vendor info';
        state.success = false; 
      })
      .addCase(saveVendorPorpertyinfo.pending, (state) => {
        state.loading = true;
        state.success = false; 
        state.error = null; 
      })
      
      .addCase(saveVendorPorpertyinfo.fulfilled, (state, action) => {
        state.loading = false;
        state.AllVendors.push(action.payload); 
        state.success = true; 
      })
      
      .addCase(saveVendorPorpertyinfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to save vendor info';
        state.success = false; 
      })

      .addCase(fetchVendorPartnerShip.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVendorPartnerShip.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorData = action.payload;
      })
      .addCase(fetchVendorPartnerShip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      .addCase(fetchVendorProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVendorProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorDataAll = action.payload; // Store all vendors data separately
      })
      .addCase(fetchVendorProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(fetchVendorPropertyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVendorPropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorData = action.payload;  // Store data by ID separately
      })
      .addCase(fetchVendorPropertyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error fetching vendor data';
      })


      .addCase(postFlightData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postFlightData.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorData = action.payload;
      })
      .addCase(postFlightData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to post flight data';
      })

      .addCase(postFlightStatic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postFlightStatic.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload;
        // Save to localStorage
        localStorage.setItem("flightData", JSON.stringify(action.payload));
      })
      .addCase(postFlightStatic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});




export default vendorSlice.reducer;

// // Export the actions
// export const { setUser, clearUser } = vendorSlice.actions;
