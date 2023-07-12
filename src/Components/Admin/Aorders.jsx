import React, { useEffect } from 'react';
import Usidebar from "./Sidebar";
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/Auth';
import { Select } from "antd"
import { BsHandThumbsDownFill } from 'react-icons/bs';
const { Option } = Select

const Aorders = () => {
    const [orders, setOrders] = useState([]);
    const [auth, setauth] = useAuth();
    const [status, setStatus] = useState([
        "Not Process",
        "Processing",
        "Shipped",
        "deliverd",
        "cancel",
    ]);
    const getOrders = async () => {
        try {
            const { data } = await axios.get("https://zwiggy.onrender.com/api/v1/allorders");
            setOrders(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlechange = async (orderid, value) => {

        try {
            const { data } = await axios.put(`https://zwiggy.onrender.com/api/v1/uporder/${orderid}`, {
                status: value,
            });
            getOrders();
        }


        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);

    return (
        <div>
            <div>
                <Usidebar />
            </div>

            <div className='items-center justify-center grid grid-cols-1 md:grid-cols-3 bg-slate-30 absolute top-[250px] md:pl-[250px]'>
                {orders?.map((item, index) => (
                    <div className='flex justify-center'>
                         <div className='border-2 border-gray-200  rounded-2xl gap-4 m-2 pb-4 hover:shadow-2xl' key={index}>
                        <div className='h-90 mx-auto md:flex rounded-2xl'>
                            <div>
                                {item.products.map((product) => (
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className='h-48 w-full md:w-48 sm:h-full p-1 rounded-lg object-cover sm:w-48'
                                        key={product._id}
                                    />
                                ))}
                            </div>
                            <div className='pl-5'>
                                <h1 className='font-bold font-mono'>{item?.buyer?.name}</h1>
                                <p className='font-bold font-mono'>{item.payment}</p>
                                <div>

                                </div>
                                <Select
                                    bordered={false}
                                    onChange={(value) => handlechange(item._id, value)}
                                    defaultValue={item?.status}
                                >
                                    {status.map((s, i) => (
                                        <Option key={i} value={s}>
                                            {s}
                                        </Option>
                                    ))}
                                </Select>

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
                        </div>
                   
                   
                ))}
            </div>
        </div >
    );
}

export default Aorders;
