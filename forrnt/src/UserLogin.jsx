import axios from 'axios'
import React, { useState } from 'react'
import { json } from 'react-router-dom'
import UserLogin from './UserLogin.css'
function Userlogin() {

    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
     

    const loginHandle=async()=>{
        let result = await axios.post("http://localhost:5000",{
            user,password
        })
        result=result.data

        if(result.name){
            localStorage.setItem(useData,json.stringify(result))
            navigator("/")
        }
        else{
            alert("please enter correct Detils")
        }
    }
  return (
    <div className='user'>
        <form className='' >
            <input type="text"  placeholder='Username'  value={user} onChange={(e)=>setUser(e.target.value)}/>
            <br/>

            <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <div>
            
                <button onClick={(e)=>{
                    e.preventDefault()
                    loginHandle()
                }}
                 type='submit'>SUBMIT</button>

             </div>
            
        </form>
    </div>
  )
}

export default Userlogin