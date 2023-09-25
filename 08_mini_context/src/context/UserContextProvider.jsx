import React from 'react'

import userContext from './UserContext'
import { useState } from 'react'

const UserContextProvider = ({children})=>{
     const [user,setUser]=useState(null)
     return (
          // Fir aap Provider component ka use karte hain, jo context mein data ko set karta hai.
          <userContext.Provider value={{
               user, setUser, 
               // mein yaha se kisi ka bhi access de sakta hoon
          }}>
          {children}
          </userContext.Provider>
     )
}

export default UserContextProvider