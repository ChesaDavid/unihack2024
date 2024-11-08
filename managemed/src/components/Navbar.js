import './navbar.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auth">LogIn</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
