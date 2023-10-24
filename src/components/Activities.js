import React from 'react';
import "../styles/Activities.css";

function Activities() {
  return (
    <div className="container">
      <h2>Our Activities</h2>
      <p>Details about our activities:</p>
      <ol className = "l2">
        <li>Weekly meetings on Wednesday at 3pm.</li>
        <li>DigiKey Competition (October 20th).</li>
        <li>Make a robot for MICS Competition.</li>
      </ol>
    </div>
  );
}

export default Activities;