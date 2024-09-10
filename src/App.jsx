import { useState } from 'react'
import Navbar from './navbar';
import Home from './Home';
import About from './About';
import Bookings from './Bookings';
import './index.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from './contact';
function App() {

  return (
  
      <div>

         <Router>
         <Navbar/>
         <Routes>
    
    
    
        <Route path="/" element={<Home/> }/>
      <Route path="About"element={<About/>}/>
      <Route path="/Bookings"element={<Bookings/>}/>
      <Route path="/Contact"element={<Contact/>}/>

    </Routes>
    
    </Router>
        </div>
  
  )
}

export default App;
