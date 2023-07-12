import React, { useState } from 'react'
import kk from "../assets/k.gif"
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'
import { BsFillCartPlusFill } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../Context/Cart'
import { useAuth } from '../Context/Auth'
import img from "../assets/s.png"
import userp from "../assets/userp.png"
import { toast } from 'react-toastify'
const Nav = () => {
    const [height, setheight] = useState(false)
    const [cart, setcart] = useCart();
    const [auth, setauth] = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        setauth({
            ...auth, user: null, token: ""
        })
        localStorage.removeItem("auth")
        toast.success("Logout succesfully")
        navigate("/")
    }


    const handletoggle = () => {
        setheight(!height)
    }



    return (

        <div>
            <nav className={`flex h-15 border-b-[1px]  bg-white shadow-xl justify-between items-center `}>
                <section>
                    <img src={img} alt='e' className='p-1 h-[50px] shadow-lg' />
                </section>
                <section>
                    <h1 className={`text-xl  font-bold absolute left-10 hover:text-orange-500  top-2 ml-2 `}>Zwiggy</h1>
                </section>



                {!auth?.user ? (
                    <>


                        <button className=' text-gray-500  hover:text-orange-500 font-bold p-1  absolute right-[100px] sm:right-[10px] md:right-[00px]' onClick={() => navigate("/login")}>Login</button>
                    </>
                ) : (
                    <>
                        
                 {auth.user?.role === 1 ? (
                    <>
                    <section className='flex flex-row-reverse absolute left-[150px] md:left-[1400px]' >
                            <img src={userp} alt='dff' className='h-[30px]   mt-1 ' />
                            <Link to="/dashboard/Admindashboard/profile"><h1 className='px-2 mt-2 font-bold hover:text-orange-500'  >
                                {auth?.user?.name} </h1>
                            </Link>

                        </section>

                    </>
                 ):(
                    <>
                    <section className='flex flex-row-reverse absolute left-[190px] sm:right-[50px] ' >
                            <img src={userp} alt='dff' className='h-[40px] px-2   ' />
                            <Link to="/udashboard/Userdashboard/profile"><h1 className='px-2 mt-2 font-bold hover:text-orange-500'  >
                                {auth?.user?.name} </h1>
                            </Link>

                        </section>

                    </>
                 )}


                    </>
                )
                }




                <section onClick={handletoggle} className='sm:hidden absolute right-[20px] '>
                    {height ? <ImCancelCircle size={23} /> : <GiHamburgerMenu size={23} />}
                </section>




            </nav>
            <div >
                <ul className={`sm:flex justify-center items-center shadow-md gap-2 ${height ? "h-35" : "h-0 overflow-hidden"} sm:h-auto transition-all ease-linear duration-300`}>
                    <div className='flex  '>
                        
                        <li className='m-1  font-bold ml-2 text-gray-500 flex hover:text-orange-500'> <Link to="/"> Home</Link></li>

                    </div>

                    <li>
                        <div className=''>

                        </div>
                        <Link to="/cart" className='m-1  font-bold ml-2 text-gray-500 flex hover:text-orange-500'>  Cart  </Link>
                    </li>
                    {auth.user ? (
                        <>
                            {auth.user?.role === 1 ? (
                                <>
                                    <li className='m-1 font-bold text-gray-500  hover:text-orange-500 '> <Link to="/dashboard/Admindashboard">Dashoboard</Link></li>

                                </>

                            ) : (
                                <>
                                    <li className='m-1 font-bold text-gray-500  hover:text-orange-500 '> <Link to="/udashboard/Userdashboard">Dashboard</Link></li>
                                </>

                            )}
                        </>
                    ) : (
                        <>

                        </>
                    )}

                   {!auth.user ?(
                    <>
                    <li className='m-1  font-bold ml-2 text-gray-500 flex hover:text-orange-500'> <Link to="/signup" >Register</Link></li>
                    </>
                   ):(
                    <>
                    </>
                   )}





                    {!auth.user ? (
                        <>
                        </>
                    ) : (
                        <>
                            <li className=" font-bold text-gray-500  hover:text-orange-500 " onClick={logout}>Logout</li>
                        </>
                    )}


                </ul>

            </div>


        </div>
    )
}



export default Nav
