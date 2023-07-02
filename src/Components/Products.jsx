import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/Auth'
import { toast } from 'react-toastify'


const Products = () => {
     const navigate=useNavigate()
    const [products, setproducts] = useState([])
    const [auth,setauth]=useAuth();
    const getproducts = async () => {
        const response = await axios.get("https://zwiggy.onrender.com/api/v2/all-products");
       
        setproducts(response.data.allproducts)

    };
  


    useEffect(() => {
        if( getproducts()){
           
        }
       
    }, [])



    return (
           <>
          
           {!auth.user?(
            <>
             <h5 className='text-center text-3xl font-sans font-bold mt-2 uppercase '>WELCOME </h5>
            </>
            
           ):(
    <>
      <h5 className='text-center md:text-3xl sm:text-xl font-sans font-bold mt-2 uppercase text-orange-500'>WELCOME {auth.user.name} </h5>
      </>
           )}
          
        <div className='grid grid-cols-1 md:grid-cols-4 overflow-hidden h-auto md:gap-[70px]  mt-3 pl-2 pb-[200px]  '>


            {products?.map((p) => (
                <div className='h-[350px]  shadow-md w-80 rounded-lg hover:shadow-2xl hover:border-2 ' key={p._id}>
                    <img src={p.img} className='h-[150px] w-full p-2 rounded-3xl' />
                    <p className='pl-5 font-bold text-xl text-yellow-600'>{p.name}</p>
                    <p className='pl-5 font-bold'>₹{p.price} </p>
                    <p className='pl-5 font-bold'>{p.restaurant} </p>

                    <p className='pl-5 font-bold font-mono'>{p.desc.substring(0,70)}</p>
                    <div    className='pl-[220px] pt-[15px]'>
                    <button  onClick={() => navigate(`/product/${p.slug}`)} className=' rounded-sm pl-3 pr-3 pb-1 border-2 hover:border-black  text-blue-500 font-bold hover:border-1' >Next</button>
                     </div>
                
                    
                    
                </div>
                
            ))}










        </div>
        </>
    )
}

export default Products