import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
     name:'user',
     initialState:{
          data:null,
          loading:false,
          error:null,
     },
     reducers:{
          fetchUserStart:(state)=>{
               state.loading = true;
          },
          fetchUserSuccess:(state, action)=>{
               state.loading = false;
               state.data = action.payload;
               state.error = null;
          },
          fetchUserFailure:(state,action)=>{
               state.loading = false;
               state.error = true;
          }
     }
})

export const { fetchUserStart ,fetchUserSuccess ,fetchUserFailure } = userSlice.actions;
export const selectUserData = (state)=>state.user.loading;
export const selectUserLoading = (state)=>state.user.loading;
export const selectUserError = (state)=>state.user.error;
export default userSlice.reducer;