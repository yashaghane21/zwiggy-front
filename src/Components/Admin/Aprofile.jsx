import React from 'react'
import Sidebar from './Sidebar'
import uicon from "../User/uicon.png"
import { useAuth } from '../../Context/Auth'

const Profile = () => {

    const [auth,setauth]=useAuth();
  return (
    <div>
      <div>
        <Sidebar />
      </div>

      <div className='absolute top-[250px]   '>
            <img src={uicon} alt='ff' className='h-[100px] pl-[120px] md:pl-[700px] ' />
            <div className='pl-[80px] md:pl-[650px]'>
                
                <h1 className='font-bold text-xl pl-2 '   > Hey ! {auth?.user?.name}</h1> 
                <hr className='mt-2 border-black'></hr>
                <div className='mt-2 px-7 py-3 font-bold border-2 rounded-lg shadow-lg'>
                    <label className='pl-11'>Address</label>
                    <p className=''>{auth?.user?.address}</p>
                    
                </div>
                <div className='mt-2 px-7 py-3 font-bold border-2 rounded-lg shadow-lg'>
                <label className='pl-11'>Mobile</label>
                <p className='pl-5'>{auth?.user?.phone}</p>
               
                </div>
                <div className='mt-2 px-7 py-3 font-bold border-2 shadow-lg rounded-lg'>
                <label className='pl-11'>Email</label>
                <p className='pl-2'>{auth?.user?.email}</p>
               
                </div>
                
                
            </div>
      </div>
    </div>
  )
}

export default Profile
