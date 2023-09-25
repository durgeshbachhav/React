# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# app component code for how to make custom react hook


import './App.css'
import useFetch from './hooks/useFetch'
import useToggle from './hooks/useToggle'

function App() {
  // usetogglehook  
  // const [isToggle, setIsToggle]=useToggle(false)

  // return (
  //  <>
  //  <h1>{isToggle? "toggle on":"toggle off"}</h1>
  //  <button onClick={setIsToggle}>toggle btn</button>
  //  </>
  // )


  // ===================

  // useFetchhook

  const [sqdata] = useFetch("https://jsonplaceholder.typicode.com/todos")
  const data = useFetch("https://jsonplaceholder.typicode.com/todos")
  console.log(sqdata);
  console.log(data);

  return(
    <>
    <h1>fetch hook</h1>
    {
      sqdata && sqdata.map((index)=>{
        return <p>{index.title}</p>
      })
    }
    </>

  )
}

export default App
# end for custom react hook


# react router

<Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Nopage />}/>
      </Route>
    </Routes>



## what is context api 

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
