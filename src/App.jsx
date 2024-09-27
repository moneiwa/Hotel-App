// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar'; 
import store from './store'; 
import Login from './Login';
import Signup from './Signup'; 
import Bookings from './Bookings';
import Home from './Home';
import Admin from './Admin';
import About from './About'; // Import the About component


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/about" element={<About />} /> {/* Route for About component */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
