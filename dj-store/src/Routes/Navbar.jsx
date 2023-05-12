import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className="navbar" >
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            <Link to="/products">Product</Link>

        </div>
    )
}

export { Navbar }