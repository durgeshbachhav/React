import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from "./actions/userActions";
import { selectUserData, selectUserError, selectUserLoading } from "./feature/slice/userSlice";

const App = () => {

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  console.log('userdata',userData);

  useEffect(()=>{
    dispatch(fetchUserData())
  },[dispatch])

  return (
    <div>
      {loading && (
        <div>loading data ....</div>
      )}
      {
        error && (
          <div>error :</div>
        )
      }
      {
        userData && (
          <div>
            {/* <p>name:{userData} {userData}</p>
            <p>email:{userData.email}</p>
            <img src={userData.picture.large} alt="" /> */}
            <p>data</p>
          </div>
        )
      }
    </div>
  )
};

export default App;
