import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <a><Link to="/">Home</Link></a>
                <a><Link to="/about">About</Link></a> 
                <a><Link to="/bookings">Bookings</Link></a>
                {/* <li><Link to="/admin">Admin</Link></li> */}
                <a><Link to="/login">Login</Link></a>
                <a><Link to="/signup">Register</Link></a>
            </ul>
        </div>
    );
}

export default Navbar;
