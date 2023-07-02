import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../Context/Auth';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Adroute = () => {
 
 
  return (
    
      <Outlet />
    
  )
}

export default Adroute
