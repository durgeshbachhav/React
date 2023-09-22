import { useState } from 'react';
import './App.css'

function App() {

  // propogate the changes in component
  // js se ui change nhi hota isliye state ka use hota hai jo ui mein changes karta hai
  const [count, setCounter]=useState(0)
  
  const addValue =()=>{
    if(count >= 0 && count <20){
      setCounter(count + 1)
    }
    
  }
  const removeValue =()=>{
    if(count > 0 && count <=20){
      setCounter(count - 1)
    }
  }

  return (
    <>
      <h1>codehustle by durgesh</h1>
      <h2>counter value : {count}</h2>
      <button onClick={addValue}>add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>

    </>
  )
}

export default App
