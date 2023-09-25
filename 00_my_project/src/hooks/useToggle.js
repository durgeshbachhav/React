
import React from 'react'
import { useState } from 'react'


// 
function useToggle(initialvalue = false) {

     const [state, setState]=useState(initialvalue);

     const toggle = ()=>{
          setState(!state)
     }
     return [state,toggle]
}

export default useToggle