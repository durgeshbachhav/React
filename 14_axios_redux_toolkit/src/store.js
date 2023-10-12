import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./feature/slice/userSlice";

const store = configureStore({
     reducer:{
          user:userReducer,
     }
})

export default store;