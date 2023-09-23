import React,{useState,useContext} from 'react'
import userContext from '../context/UserContext'

const Login = () => {
     const [username, setUsername]=useState("")
     const [pass,setPass]=useState("")

     //contextfetch
// yeh baat huei data bhejneki
     const {setUser}= useContext(userContext)
     const handleSubmit=(e)=>{
          e.preventDefault();
          setUser({username,pass})
     }
  return (
    <div>
     <h2>Login</h2>
     <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
     <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='password'/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login