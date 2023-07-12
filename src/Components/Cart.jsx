import React, { useEffect, useState } from 'react'
// import img from "../assets/1.png"

import DropIn from "braintree-web-drop-in-react"
import ecart from "./ecart.png"
import axios from "axios"
import { toast } from 'react-toastify'
import { useCart } from "../Context/Cart"
import { useAuth } from '../Context/Auth'
import { GiQuickSlash } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const [cart, setcart] = useCart();
  const [auth, setauth] = useAuth();
  const navigate = useNavigate()
  const [mode, setmode] = useState("")
  console.log(auth.user);
  console.log(cart)


  const selectmode = () => {
    let s = document.getElementById("mode").value;
    setmode(s);
  }

  const id = localStorage.getItem("userid")
  console.log(id)
  const handleorder = async () => {
    let datta = {
      "products": cart,
      "payment": mode,
      "buyer": id
    }
    try {
      const { data } = await axios.post("https://zwiggy.onrender.com/api/v2/order", {
        products: datta.products,
        payment: datta.payment,
        buyer: datta.buyer


      })
      console.log(data)
      if (data.success) {
        toast.success("ordered succesfully")
        localStorage.removeItem("cart")
        setcart([]);
      }

    }
    catch (error) {
      alert(error)
    }
  }


  const totalprice = () => {
    let tp = 0;
    let sp = 0;
    cart.map((item) => {
      tp = tp + item.price;

    });
    return tp;
  }
  useEffect(() => {
    if (!auth.user) {
      alert("login first")
      navigate("/login")
    }

  })

  const removeitem = (pid) => {
    let mycart = [...cart];
    let index = mycart.findIndex((item) => item._id === pid);
    mycart.splice(index, 1)
    setcart(mycart);
    localStorage.setItem("cart", JSON.stringify(mycart));
    toast.error("Item removed")


  }


  return (
    <div className='flex flex-row   absolute sm:left-[10px] h-screen mt-[50px]'>
      <div className=' bg-slate-30'>
        {
          (cart.length == 0) ?
            <>
              <img src={ecart} alt='ddf' className='md:h-[500px] md:w-full w-[300px] h-[250px] pl-[80px]' />
            </> : cart?.map((item, index) => (
           
                <div className=' border-2 flex justify-center border-gray-200 rounded-2xl gap-4 m-2 pb-4 hover:shadow-2xl '>
                  <div className=''>
                  <div key={index} className='h-70 flex justify-center sm:justify-center   mx-auto md:flex rounded-2xl '>
                    <img src={item.img} alt='fe' className='h-48   w-full md:object-cover sm:h-24 md:h-[80%] p-1 rounded-2xl object-cover sm:w-48 ' />
                    <div className='pl-5'>
                      <h1 className='font-bold font-mono'>{item.name}</h1>
                      <p className='font-bold font-mono'>{item.price} RS</p>
                      <p className='font-bold'>Qty: {item.quantity}</p>
                      <p className='font-bold'>Total: {item.quantity * item.price} ₹</p>
                      <button onClick={() => removeitem(item._id)} className='border-2 bg-red-500 rounded-md text-white px-2 '>Remove</button>

                    </div>
                  
                </div>
                    </div>
                 
              </div>

            ))
        }

        <div className=" absolute md:left-[700px] sm:left-[1000] md:top-[200px] flex justify-center sm:justify-center   " >
          <div className='border-2 h-[300px] w-[300px]  py-7 px-5 bg-gray-100  rounded-lg'>
            <h1 className='text-start font-bold text-slate-350 text-xl mt-2'>PRICE DETAILS</h1>
            <h1 className='text-xl p-0.50 mt-2 pl-2'>Price: {totalprice()}</h1>
            <h1 className='text-xl p-0.50 pl-2'>Discount: 00</h1>
            <h1 className='text-xl p-0.50 pl-2'>Total: {totalprice()}</h1>
            <h1 className='text-xl p-0.50 pl-2'> Select Payment mode</h1>
            <select className='pl-2 mt-2' id='mode' onChange={selectmode}>
              <option value="cash" >Cash on Delivery</option>
              <option value="online" >Online</option>
            </select>
            <button onClick={handleorder} className="border-2 p-1 rounded-sm w-full pl-2 bg-yellow-500 text-black font-bold mt-3">PLACE ORDER</button>
          </div>
        </div>

        <div>

        </div>
      </div>

      <>


      </>

    </div>


  );
}

export default Cart;