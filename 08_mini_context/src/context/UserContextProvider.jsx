import React from 'react'

import userContext from './UserContext'
import { useState } from 'react'

const UserContextProvider = ({children})=>{
     const [user,setUser]=useState(null)
     return (
          <userContext.Provider value={{
               user, setUser, 
               // mein yaha se kisi ka bhi access de sakta hoon
          }}>
          {children}
          </userContext.Provider>
     )
}

export default UserContextProvider