import React from 'react'
import { useState } from 'react'

function App () {
  // propogate the changes in component
  // js se ui change nhi hota isliye state ka use hota hai jo ui mein changes karta hai
  const [count,setCount] =useState(0)
  // let count = 0
const addValue=()=>{
  if(count >= 0 && count < 20){
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // setCount((prev)=> prev+1)
    // setCount((prev)=> prev+1)
    // setCount((prev)=> prev+1)
    setCount((prev)=> prev+1)
    // count+=1
  }
}
const removeValue =()=>{
  if(count >0 && count <= 20){
    setCount(count - 1)
    // count-=1
  }
}
  
  return (
    <div>
      <h1>codehustle by Durgesh</h1>
      <h2>{count}</h2>
      <button onClick={addValue}>addValue</button>
      <button onClick={removeValue}>removeValue</button>
    </div>
  )
}

export default App


