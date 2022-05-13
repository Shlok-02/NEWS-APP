import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="right-nav">
          <h1><span>SG</span> News <i class="fa-solid fa-period"></i> </h1>
        </div>
        {/* <div className="left-nav">
          <ul className="list">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact Us</Link></li>
          </ul>
        </div> */}
      </div>
      
    </div>
  )
}

export default Navbar