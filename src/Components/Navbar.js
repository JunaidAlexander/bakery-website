import React from 'react'
import  { NavLink } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src=''/>
        </div>
        <div className="menu">
<div className="nav-link">
<ul>
<li>+1 873-238-4454</li>
<li><NavLink className="navLink" to="/">Home</NavLink></li>
<li><NavLink className="navLink" to="/About">About Us</NavLink></li>
<li><NavLink  className="navLink"to="/Delivery">Delivery</NavLink></li>
<li><NavLink  className="navLink" to="/Contact">Contact Us</NavLink></li>
</ul>

</div>

</div>
<div className="icons">
</div>
      </nav>
    </>
  )
}
