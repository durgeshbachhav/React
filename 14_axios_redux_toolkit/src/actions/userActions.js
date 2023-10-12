import { fetchUserDataApi } from "../api";
import { fetchUserFailure, fetchUserStart, fetchUserSuccess } from "../feature/slice/userSlice"



export const fetchUserData =() => async(dispatch)=>{
     try {
          dispatch(fetchUserStart());
          const data = await fetchUserDataApi();
          dispatch(fetchUserSuccess(data))
     } catch (error) {
          console.log("error fetching user data",error);
          dispatch(fetchUserFailure(error.message));
     }
}