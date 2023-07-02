import React, { useState } from 'react'
import img from "../assets/login1.png"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../Context/Auth'
import axios from "axios"
import { toast } from 'react-toastify'
const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [auth, setauth] = useAuth();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    let datta = {
      "email": email,
      "password": password
    }
    const { data } = await axios.post("https://zwiggy.onrender.com/api/v2/login", {
      email: datta.email,
      password: datta.password
    });
    console.log(data)
    if (data.success) {
      toast.success("Login Succesfully");
      localStorage.setItem("userid",data?.user._id)
      navigate("/")
      setauth({
        ...auth,
        user: data.user,
        token: data.token
      });
      localStorage.setItem("auth", JSON.stringify(data));
    }
    else {
      alert("wrong email or password")
    }

  }
  return (
    <div className='flex flex-col sm:flex-row mt-5 h-screen '>
      <div className=' sm:w-1/2 w-full p-5 mt-[25px]'>
        <img src={img} className='md:h-[60%] md:w-[60%] sm:h-full mt-5 sm:w-full' />
      </div>
      <div className='sm:w-[50px]  md:w-[450px] pl-8  pt-5 h-[350px] md:mt-[100px] border-2 rounded-2xl hover:shadow-2xl'>
        <form className=' md:pl-[50px] items-center' onSubmit={handlesubmit}>
          <label className='text-lg font-semibold m-1 flex'>Email</label>
          <div className='flex'>
            <input type='text' className='w-[250px]  h-10 rounded-md p-1 border-2 border-yellow-200'
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
              }} /><br />
          </div>


          <label className='text-lg font-semibold m-2 mt-5 flex'>Password</label>
          <input type='password' className='w-[250px] rounded-md  h-10 p-1 mt-1 border-2 border-yellow-200 hover:shadow-2xl'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }} /><br />
          <div className='p-5 ml-15 m-2'>
            <button className='bg-yellow-500 text-white  m-2 py-1 px-5 rounded-md absolute md:left-[900px]'>Submit</button>

          </div>
          <h1 className='mt-[25px] pl-[10px] font-bold '>Not registerd ? <Link to="/signup" className='text-orange-500'>  Register Here</Link></h1>
              <h1 className='pl-[50px] font-bold ' > <Link to="/fpass" >Forgot password</Link></h1>
        </form>


      </div>


    </div>
  )
}

export default Login