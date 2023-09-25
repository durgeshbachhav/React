
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Layout from './components/Layout'
// import Home from './components/Home'
// import Blogs from './components/Blogs'
// import Contact from './components/Contact'
// import Nopage from './components/Nopage'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react';
// create a context
// const userContext = React.createContext()  //both are same way
const userContext = createContext();

function App() {
  const user={
    name:"aaa",
    email:"aaa@gmail.com",
    location:"pune",
    company:"tcs"
  }
  
   return(
    <userContext.Provider value={user}>
      <h1>app is here</h1>
      <p>app username{ user.name}</p>
      <Child1 />
    </userContext.Provider>
   )
}
function Child1(){

  const username = useContext(userContext)
  return (
    <div>
      <h1>child 1</h1>
      <p>username : {username.name}</p>
      <Child2 username={username}/>
    </div>
  )
}
function Child2(){
  const user = useContext(userContext)

  return (
    <div>
      <h1>child 2</h1>
      <p>username location : {user.location}</p>
      <Child3 />
    </div>
  )
}
function Child3(){
  const user = useContext(userContext)

  return (
    <div>
      <h1>child 3</h1>
      <p>username email : {user.email}</p>
      <Child4 />
    </div>
  )
}
function Child4(){
 const user = useContext(userContext)
  return (
    <div>
      <h1>child 4</h1>
      <p>username company name : {user.company}</p>
      
    </div>
  )
}

export default App
