import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div>
  <Link to="/">Home</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/about-us">About</Link>
  <Link to="/services">Services</Link>
  <Link to="/login">Login</Link>
  </div> 
  )
}

export default NavBar
// /about-us 