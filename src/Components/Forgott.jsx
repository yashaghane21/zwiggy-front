import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import fpass from "../assets/fpass.png"

const Forgott = () => {
     const navigate=useNavigate()
    const [email, setemail] = useState("")
    const [newpassword, setnewpassword] = useState("")

    const handle = async(e)=>{
        e.preventDefault();
        let datta ={
            "email":email,
            "password":newpassword
        }
        const {data} =await axios.put("https://zwiggy.onrender.com/api/v2/fpass",{
            email:datta.email,
            newpassword:datta.password
        })
        if(data.success){
            toast.success("password reset succesfully");
            navigate("/login")
        }
    }
  return (
    <div className='flex justify-center '>
     
        <div className='absolute top-[180px]    border-2 h-[300px] px-5  pt-5  rounded-2xl hover:shadow-2xl'>
        <form className=' md:pl-[50px] items-center md:pr-5 ' onClick={handle}>
          <label className='text-lg font-semibold m-1 flex'>Email</label>
          <div className='flex'>
            <input type='text' className='w-[250px]  h-10 rounded-md p-1 border-2 border-yellow-200'
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
              }} /><br />
          </div>


          <label className='text-lg font-semibold m-2 mt-5 flex'> New Password</label>
          <input type='password' className='w-[250px] rounded-md  h-10 p-1 mt-1 border-2 border-yellow-200 hover:shadow-2xl'
            value={newpassword}
            onChange={(e) => {
              setnewpassword(e.target.value)
            }} /><br />
          <div className='p-5 ml-[50px] m-2'>
            <button className='bg-yellow-500 text-white  md:left-[150px]  m-2 py-1 px-5 rounded-md absolute '>Reset</button>

          </div>
            
        </form>


    </div>
    </div>
  )
}

export default Forgott
