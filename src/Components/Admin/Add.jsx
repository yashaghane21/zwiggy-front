import React, { useState } from 'react'
import axios from "axios"
import Sidebar from './Sidebar'
import { toast } from 'react-toastify'
const Add = () => {

  const [name, setname] = useState("")
  const [img, setimg] = useState("")
  const [price, setprice] = useState("")
  const [desc, setdesc] = useState("")
  const [res, setres] = useState("")


  let datta = {
    "Name": name,
    "Img": img,
    "Price": price,
    "desc":desc,
      "res": res
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://zwiggy.onrender.com/api/v1/create-product", {

        name: datta.Name,
        price: datta.Price,
        desc: datta.desc,
        img: datta.Img,
        restaurant:datta.res

      })
      if (data.success) {
         toast.success("product created succesfully")

      }



    } catch (error) {
      alert(error);
      console.log(error)
    }

  }

 

  return (
    
    <div>
      <div>
        <Sidebar/>
      </div>

  
    <div className=' flex items-center justify-center first-letter: mt-[200px] h-[250px] absolute top-[250px] md:pl-[550px] ' >
       
      <form onSubmit={handlesubmit}>
        <div className='p-5'>
          <label className='m-5 text-xl pl-[100px] font-bold'>Product</label>
          <input className='border-2 rounded-md mt-2 border-black p-2 w-full'
            value={name}
            onChange={(e) => {
              setname(e.target.value)
            }}
            type='text' />
        </div>

        <div className='p-5'>
          <label className='m-5 pl-[100px]  text-xl font-bold'>Price</label>
          <input className='border-2 rounded-md mt-2 border-black p-2 w-full'
            value={price}
            onChange={(e) => {
              setprice(e.target.value)
            }}
            type='text' />
        </div>

        <div className='p-5'>
          <label className='m-5 text-xl pl-[100px] font-bold'>Desc</label>
          <textarea className='border-2  resize-none mt-2   rounded-md   border-black  w-full'
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value)
            }}
            type='text' />
        </div>

        <div className='p-5'>
          <label className='m-5 text-xl pl-[100px] font-bold'>Img url</label>
          <input className='border-2 rounded-md mt-2  border-black p-2 w-full'
            value={img}
            onChange={(e) => {
              setimg(e.target.value)
            }}
            type='text' />
            </div>

          <div className='p-5'>
            <label className='m-5 text-xl pl-[100px] font-bold'>Restaurant </label>
            <input className='border-2 rounded-md mt-2  border-black p-2 w-full'
              value={res}
              onChange={(e) => {
                setres(e.target.value)
              }}
              type='text' />

            <div className='mt-5 w-[15px] md:pl-[100px] pl-10  ml-10'>
              <button className='ml-10 border-2  border-black bg-yellow-300 p-1 font-bold pl-3 pr-3 rounded-md'>
                Add
              </button>
            </div>

          </div>



      </form>


    </div>
    </div>
    

  )
}

export default Add
