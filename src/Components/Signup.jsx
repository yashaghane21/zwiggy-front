import React from 'react'
import { useState } from 'react'
import img from "../assets/signup.png"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
const Signup = () => {

      const navigate=useNavigate();
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [Password,setpassword]=useState("")
    const [phone,setphone]=useState("")
    const [address,setaddress]=useState("")
  
  
    const handlesubmit = async(e) =>{
        e.preventDefault();
        try {
          const datta={
            "name":name,
            "email":email,
            "password":Password,
            "phone":phone,
            "address":address
          }
          const {data} = await axios.post("https://zwiggy.onrender.com/api/v2/signup",{
            name:datta.name,
            email:datta.email,
            password:datta.password,
            phone:datta.phone,
            address:datta.address
        });
        console.log(data)
        if(data.success){
          alert("registerd succesfully")
          navigate("/login")
        }
        else{
          alert("email is wrong")
        }




        } catch (error) {
          alert(error)
        }
       
    }
  return (
    <div className='flex flex-col sm:flex-row mt-5 h-screen  justify-center '>
      <div className=' sm:w-1/2 w-full p-5 mt-[25px]'>
        <img src={img} className='md:h-[60%] md:w-[60%] sm:h-[50%] mt-5 sm:w-full' />
      </div>
      <div className='sm:w-[50px]  md:w-[450px] p-5  h-[600px] flex justify-center border-2 rounded-2xl hover:shadow-2xl'>
        <form className=' md:pl-[50px] items-center' onSubmit={handlesubmit}>  

          <label className='text-lg font-semibold m-1 flex'>Name</label>
          <div className='flex'>
          <input type='text' className='w-[250px] h-10 rounded-md p-1 border-2 border-yellow-200' 
             value={name}
             onChange={(e)=>{
                setname(e.target.value)
             }}
           /><br />
          </div>
         

          <label className='text-lg font-semibold m-2  flex'>Email</label>
          <input type='text' className='w-[250px] rounded-md  h-10 p-1  border-2 border-yellow-200 hover:shadow-2xl' 
           value={email}
           onChange={(e)=>{
              setemail(e.target.value)
           }}/><br />


          
          <label className='text-lg font-semibold m-2  flex'>Password</label>
          <input type='text' className='w-[250px] rounded-md  h-10 p-1  border-2 border-yellow-200 hover:shadow-2xl' 
           value={Password}
           onChange={(e)=>{
              setpassword(e.target.value)
           }}/><br />

          <label className='text-lg font-semibold m-2  flex'>Phone</label>
          <input type='text' className='w-[250px] rounded-md  h-10 p-1 mt-1 border-2 border-yellow-200 hover:shadow-2xl' 
           value={phone}
           onChange={(e)=>{
              setphone(e.target.value)
           }}/><br />
          
          <label className='text-lg font-semibold m-2  flex'>Address</label>
          <input type='text' className='w-[250px] rounded-md  h-10 p-1 mt-1 border-2 border-yellow-200 hover:shadow-2xl' 
           value={address}
           onChange={(e)=>{
              setaddress(e.target.value)
           }} /><br />



          <div className='p-5 ml-10 m-2'>
            <button className='bg-yellow-500 text-white  m-2 py-1 px-5 rounded-md absolute '>Register</button>

          </div>
          <h1 className='mt-[25px] pl-[20px] font-bold '>Already Registered? <Link to="/login" className='text-orange-500'>  Login Here</Link></h1>

        </form>


      </div>


    </div>
  )
}

export default Signup
