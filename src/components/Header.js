import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>College Club</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>
      </nav>
    </div>
  );
}

export default Header;
