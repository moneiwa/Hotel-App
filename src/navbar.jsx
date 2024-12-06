import React from 'react';
import { Link } from 'react-router-dom'; 
import { logout } from './authSlice';
import { useDispatch } from 'react-redux';

function Navbar() {

    
        const dispatch = useDispatch();
    
        const handleLogout = () => {
            dispatch(logout());
        };
    



    return (
<div className='navbar'>
        <nav>
            <ul>
                <a><Link to="/">Home</Link></a>
                <a><Link to="/about">About</Link></a> 
                <a><Link to="/bookings">Bookings</Link></a>
                {/* <li><Link to="/admin">Admin</Link></li> */}
                <a><Link to="/login">Login</Link></a>
                <a><Link to="/signup">Register</Link></a>

                </ul>
          </nav>
            </div>
      
    );
}

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { logout } from './authSlice';
// import { useDispatch, useSelector } from 'react-redux';

// function Navbar() {
//     const dispatch = useDispatch();
//     const user = useSelector((state) => state.auth.user); // Access user from state

//     const handleLogout = () => {
//         dispatch(logout());
//     };

//     return (
//         <div className='navbar'>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/bookings">Bookings</Link></li>
//                     {user ? (
//                         <>
//                             <li>Hello, {user.email}</li>
//                             <li><button onClick={handleLogout}>Logout</button></li>
//                         </>
//                     ) : (
//                         <>
//                             <li><Link to="/login">Login</Link></li>
//                             <li><Link to="/signup">Register</Link></li>
//                         </>
//                     )}
//                 </ul>
//             </nav>
//         </div>
//     );
// }

// export default Navbar;
