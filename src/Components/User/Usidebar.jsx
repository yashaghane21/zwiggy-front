
import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'
import { BsFillCartPlusFill } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {

  1

  const handletoggle = () => {
    setheight(!height)
  }
  const [height, setheight] = useState(false)
  return (
    <div>
      <div>



        <section onClick={handletoggle} className='sm:hidden'>
          {height ? <ImCancelCircle size={23} /> : <GiHamburgerMenu size={23} />}
        </section>

      </div>
      <div className='h-screen w-[250px]  rounded-2xl '>
        <div >
          <ul className={`md:overflow-auto py-5 justify-center itemss-center shadow-md  ${height ? "h-28" : "h-0 overflow-hidden"} bg-white text-gray-500 sm:h-auto transition-all ease-linear duration-300`}>
            <li className='m-1 font-semibold my-3 pl-5 hover:bg-orange-500 hover:text-white'> <Link to="/udashboard/Userdashboard/welcome">Home</Link></li>
            <hr></hr>
            <li className='m-1 font-semibold my-3 pl-5  hover:bg-orange-500 hover:text-white'> <Link to="/udashboard/Userdashboard/orders">Orders</Link></li>
            <hr></hr>
            <li className='m-1 font-semibold my-3 pl-5  hover:bg-orange-500 hover:text-white'> <Link to="/udashboard/Userdashboard/profile">Profile</Link></li>
            <hr></hr>
           

          </ul>

        </div>

      </div>
    </div>
  )
}

export default Sidebar
