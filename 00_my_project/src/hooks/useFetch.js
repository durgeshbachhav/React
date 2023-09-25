import React, { useEffect, useState } from 'react'

function useFetch(url) {

     const [data, SetData]=useState();
     useEffect(()=>{
          fetch(url)
          .then((res)=>res.json())
          .then((data) => SetData(data))
     },[url])
  return [data]
}

export default useFetch