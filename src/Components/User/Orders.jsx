import React, { useEffect } from 'react';
import Usidebar from "./Usidebar";
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/Auth';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setauth] = useAuth();
  let id = localStorage.getItem("userid")
  const getOrders = async () => {
    try {
      const { data } = await axios.get("https://zwiggy.onrender.com/api/v2/my-orders", {
        params: { id: id }, // Pass the id as a query parameter
      });
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
     if(auth?.token) getOrders()
  }, [auth?.token]);

  return (
    <div>
      <div>
        <Usidebar />
      </div>
  
      <div className='items-center justify-center grid grid-cols-1 md:grid-cols-3 bg-slate-30 absolute top-[250px] md:pl-[250px]'>
        {orders?.map((item, index) => (
          <div className='border-2 border-gray-200 rounded-2xl gap-4 m-2 pb-4 hover:shadow-2xl' key={index}>
            <div className='h-90 mx-auto md:flex rounded-2xl'>
              <img src={item.products[0].img} alt='fe' className='h-48 w-full md:w-48 sm:h-full p-1 rounded-2xl object-cover sm:w-48' />
              <div className='pl-5'>
                <h1 className='font-bold font-mono'>{item?.buyer?.name}</h1>
              <p className='font-bold font-mono'>{item.payment}</p>
              <p className='font-bold font-mono'>Status:{item.status}</p>
              <h2>Product Details:</h2>
        {item.products.map((product, productIndex) => (
          <div key={productIndex}>
            <p>Product name:{product.name}</p>
            <p>₹{product.price}</p>
         
            {/* Include other product details here */}
          </div>
        ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }

export default Orders;
