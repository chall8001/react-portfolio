import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

function Nav() {



return(
<nav className="navbar">
    <div className="navbar-container">
        <ul>
    <Link to="/contact">
        <li>contact</li>
    </Link>
    <Link to="/">
        <li>Home</li>
    </Link>
    <Link to="/projects">
        <li>Projects</li>
    </Link>

    </ul>
    </div>
</nav>


)
}

export default Nav