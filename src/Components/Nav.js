import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Assets/LC_Logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="navbar-fixed z-depth-3">
                <div className="nav-wrapper blue lighten-2">
                    <Link to="/" className="brand-logo"><img className="responsive-img circle" src={Logo} alt=""/>Lamb Companion</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/commands">Commands</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav