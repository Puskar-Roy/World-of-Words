import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li> <Link to={'/home'}>Home</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
