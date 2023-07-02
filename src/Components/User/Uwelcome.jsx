import React from 'react'
import Sidebar from './Usidebar'
import { useAuth } from '../../Context/Auth'

const Uwelcome = () => {

    const [auth,setauth]=useAuth();
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className='absolute top-[250px] pl-12 md:pl-[680px]'> 
        <h5 className='text-2xl font-bold'>Heyy ! {auth.user.name}👏👏</h5>
      </div>
    </div>
  )
}

export default Uwelcome
