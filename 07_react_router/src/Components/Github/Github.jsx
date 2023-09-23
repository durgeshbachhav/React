import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
     // const [data,setdata]=useState([])
     // useEffect(()=>{
     //      fetch('https://api.github.com/users/durgeshbachhav')
     //      .then((res)=> res.json())
     //      .then((data)=> {
     //           console.log(data)
     //           setdata(data)
     //      })
     // },[])
     const data = useLoaderData()
  return (
   <>
    <div>Github followers:{data.followers}</div>
    <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github


export const GithubInfoLoader = async() => {

  const response = await fetch('https://api.github.com/users/durgeshbachhav')
  return response.json()
}

