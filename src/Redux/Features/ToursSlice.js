import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../BaseUrl";
import axios from "axios";
import { retry } from "@reduxjs/toolkit/query";

export const getTours = createAsyncThunk(
    "getTours",

    async(id,{rejectWithValue})=>{

        
        try {
            const response = await axios.get(`${baseurl}/getalltours`);
                const result= response.data

          
                return result


        } catch (error) {
            
            return rejectWithValue(error)
        }
    }


)



export const getSingleTour= createAsyncThunk(
    "getSingleTour",

    async(id,{rejectWithValue})=>{

        try {
            
            const response= await axios.get(`${baseurl}/getsingletour/${id}`)

            const result= response.data

            return result

        } catch (error) {
            
            rejectWithValue(error)
        }

    }

)

export const signupUser = createAsyncThunk(
    'signupuser',
    async (userData, { rejectWithValue }) => {
      try {
        const response= await axios.post(`${baseurl}/createUser` , userData)

        return response.data; // Assuming your API returns the user data
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const loginUser = createAsyncThunk(
    'loginUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${baseurl}/login`, { email, password });
        if (response.data.message === 'Login successful') {
          localStorage.setItem('userData', JSON.stringify(response.data.user)); // Store user details
          return response.data;
        } else {
          return rejectWithValue('Login failed');
        }
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
      }
    }
  );
  
 export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };
  

  
export const toursSlice= createSlice({

    name:'tours',
    initialState:{

        AllTours:[],
        loading:false,
        error:null,
        SingleTour:null,
        user:getUserFromLocalStorage(),

    },
    reducers: {
      // Reducer to set user
      setUser: (state, action) => {
        state.user = action.payload;
      },
      // Reducer to clear user
      clearUser: (state) => {
        state.user = null;
      },
    },
    
    extraReducers:(builder)=>{

        builder
        .addCase(getTours.pending,(state)=>{

            state.loading=true
            state.error=null

        })
        .addCase(getTours.fulfilled,(state,action)=>{

            state.loading=false;
            state.AllTours=action.payload.Tours

            console.log(action.payload.Tours,"redux")

        })
        .addCase(getTours.rejected,(state,action)=>{

            state.loading=false;
            state.error=action.payload


        })


        .addCase(getSingleTour.pending,(state)=>{

            state.loading=true
            state.error=null

        })

        .addCase(getSingleTour.fulfilled,(state,action)=>{
            state.loading=false
            state.SingleTour = action.payload.TourDetails

        })

        .addCase(getSingleTour.rejected,(state,action)=>{

            state.error= action.payload.message

        })

        //BAsit 

        .addCase(signupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(signupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user; // Adjust based on your API response structure
          })
          .addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Handle error here
          })


          .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.error = null;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });

    }



}) 

export const { setUser, clearUser } = toursSlice.actions;


export default toursSlice.reducer;