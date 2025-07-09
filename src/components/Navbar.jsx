import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
        </div>

        <div>
            <button className='mode'>Mode</button>
        </div>
    </nav>
  )
}

export default Navbar;