import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from "../Context/Cart"
import { useAuth } from '../Context/Auth'
import { toast } from 'react-toastify'
import axios from 'axios';
const Myproduct = () => {

    const params = useParams();
    const [cart, setcart] = useCart();
    const [auth, setauth] = useAuth();
    const navigate = useNavigate();
    const [product, setproduct] = useState({});
    const [quantity, setquantity] = useState(1);

    useEffect(() => {
        if (params?.slug) productdetails();
        if(!auth?.user){
           toast.error("login first to add into cart")
            navigate("/login")
        }
    }, [params?.slug]);

    const productdetails = async () => {
        try {
            const responsedata = await axios.get(`https://zwiggy.onrender.com/api/v2/Single-product/${params.slug}`)
            console.log(responsedata)

            setproduct(responsedata.data.Sproduct);
        }
        catch (error) {
            alert(error)
        };
    }

    return (

        <div className='h-screen flex flex-col sm:flex-row mt-2 pb-10'>
            <div className='sm:w-1/2 h-full'>
                <img className="h-[400px] w-full  mt-2 rounded-lg border-2 pl-5 hover:scale-110 shadow-md"  src={product.img} />
            </div>



            <div className='pl-[70px]'>
                <div className=' pl-0  mt-5 font-bold '>
                    <h1 className=' font-mono  text-4xl underline'>{product.name}</h1>
                    <p className='p-2 mt-5 font-bold font-sans text-2xl'> {product.price} ₹</p>
                    <h1 className={'sm:p-2 x'}>{product.desc}</h1>

                    <div className='gap-4'>

                        <div></div>

                        <div className='gap-2 mt-5 pr-5'>
                            <input className="w-[50px] border-2 border-yellow-500" type='number' name="quantity" value={quantity} onChange={(e) => {
                                setquantity(e.target.value)
                            }} />
                            <button
                                onClick={() => {
                                    const updatedproduct = { ...product, quantity }
                                    setcart([...cart, updatedproduct]);
                                    localStorage.setItem("cart", JSON.stringify([...cart, product]));
                                  toast.success("item added succesfully")
                                }}
                                className='border-2 rounded-md p-1 bg-yellow-400 text-black'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Myproduct
