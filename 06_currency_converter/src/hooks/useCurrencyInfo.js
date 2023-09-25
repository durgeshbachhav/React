
//this is also custom hook
function hello(){
     return []
}

// please write hooks in pure .js not in .jsx
// custom hooks build in hooks ko use kar sakte hai
import { useEffect, useState } from "react"
function useCurrencyInfo(currency){
     const [data,setdata]=useState({})
     useEffect(()=>{
          fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
          .then((res)=>res.json())
          .then((res) => setdata(res[currency]))
          console.log(data);
     },[currency])
     console.log(data);
     return data;
}

export default useCurrencyInfo;