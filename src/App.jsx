import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Myproduct from './Components/Myproduct'
import Cart from './Components/Cart'
import Orders from './Components/User/Orders'
import Profile from './Components/User/Profile'
import Login from './Components/Login'
import Add from './Components/Admin/Add'
import Fpass from "./Components/Forgott"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "./Components/Layout"
import Nav from "./Components/Nav"
import { CartProvider } from "./Context/Cart"
import { Authprovider } from './Context/Auth'
import Signup from "./Components/Signup"
import Dashboard from "./Components/Admin/Dashboard"
import Adroute from './Components/Admin/Adroute'
import Aprofile from "./Components/Admin/Aprofile"
import Awelcome from "./Components/Admin/Awelcome"
import Uroute from './Components/User/Uroute'
import UDashboard from './Components/User/UDashboard'
import Uwelcome from './Components/User/Uwelcome'
import Aorders from './Components/Admin/Aorders'
import Prodcuts from './Components/Admin/Prodcuts'


const App = () => {
  return (
    <>
      <Authprovider>
        <ToastContainer />
        <CartProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<Layout />} />
              <Route path='/product/:slug' element={<Myproduct />} />
              <Route path='/createproduct' element={<Add />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/fpass' element={<Fpass />} />

              <Route path='/dashboard' element={<Adroute />} >

                <Route path='Admindashboard' element={<Dashboard />} />
                <Route path='Admindashboard/add' element={<Add />} />
                <Route path='Admindashboard/profile' element={<Aprofile />} />
                <Route path='Admindashboard/welcome' element={<Awelcome />} />
                <Route path='Admindashboard/allorders' element={<Aorders />} />
                <Route path='Admindashboard/allproducts' element={<Prodcuts />}  />

              </Route>


              <Route path='/udashboard' element={<Uroute />} >

                <Route path='Userdashboard' element={<UDashboard />} />
                <Route path='Userdashboard/orders' element={<Orders />} />
                <Route path='Userdashboard/profile' element={<Profile />} />
                <Route path='Userdashboard/welcome' element={<Uwelcome />} />
                
              </Route>
            </Routes>

          </BrowserRouter>



        </CartProvider>



      </Authprovider>



    </>
  )
}

export default App
