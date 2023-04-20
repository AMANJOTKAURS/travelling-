import React from "react";
import Logo2 from '../images/Logo2.png'
import { Link } from "react-router-dom";
import {FaHome, FaLocationArrow, FaSearchLocation, FaServicestack} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

import reactstrap from 'reactstrap';
const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      
  <Link class="navbar-brand" to="/Tourguide">
  <img src={Logo2} alt="" className="img1 "/>
  {/* <p>Deeam & Destination</p> */}
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>

  <div className="Navmenu" id="navbarSupportedContent">
    <ul className="nav">
    <li className="nav-item active">
        <Link className="nav-link" to="/Slide"><FaHome/> Home</Link>
     
      </li>
     
      <li className="nav-item active">
        <Link className="nav-link" to="/Destinations"><FaSearchLocation/>Destinations</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Services"><FaServicestack/>Services</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Package">Package</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Tourguide">Tour Guide</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link" to="/Contact">Contact</Link>
      </li>
      
      <button className='btn btn-info '><Link className="abc" to="/Booknow">BookNow</Link></button>
      </ul>
  </div>
</nav>
</>

);
}
export default Navbar;