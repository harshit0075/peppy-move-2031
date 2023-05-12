import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllProducts from '../Pages/Products'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
    return (
        
        <Routes>
             <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
     
      <Route path="/products" element={<PrivateRoute><AllProducts/></PrivateRoute>} />
     
    </Routes>
    )
}

export {AllRoutes}