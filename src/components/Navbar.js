import React from 'react'
import logo from '../assests/log2.png';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo} alt="logo" />
        </div>
        <div className='rightside'>
            <Link to="/">About</Link>
            <Link to="/journey">Journey</Link>
            <Link to="/ticket">Ticket</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>

  )
}

export default Navbar


