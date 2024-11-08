import './navbar.css';
import React from 'react';
import logo from '../assets/hospital.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='flex'>
        <img src={logo} className="App-logo-nav" alt="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/auth">LogIn</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
