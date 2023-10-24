import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

function Header() {
  return (
    <div className="HeaderWrapper">
      <h1>MSU Club Website</h1>
      <nav>
        <Link className='l1' to="/">Home</Link>
        <Link className='l2' to="/activities">Activities</Link>
      </nav>
    </div>
  );
}

export default Header;
