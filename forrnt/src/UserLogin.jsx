import React, { useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";


function UserLogin() {
    const [user,setUser]=useState()

    const [passward,setPassward]=useState()

    const loginHandle=async()=>{
        let result=await axios.post("http://localhost:4000/user/login",{
            username,passward
        })
        result=result.data

        if (result.name){
            localStorage.setItem(useData,json.stringify(result))
            navigator("/")
                
        }
        else{
            alert("Enter correct deaital")
        }
    }
  return (
    <div>
        <form action="">
            <input type="text"placeholder="UserName"  value={user} onChange={(e) => setUser(e.target.value)}/>
            <input type="text"placeholder="passward"value={passward} onChange={(e) =>setPassward(e.target.value)} />
          <div>
            <button onClick={(e)=>{
                e.preventDefault()
                loginHandle()

            }}
            type="Submit"></button>
          
          </div>
        </form>

    </div>
  )
}

export default UserLogin