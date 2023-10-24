import React from 'react';
import styles from '../styles/Home.css';

function Home() {
  return (
    <div className="container">
      <h2 className={styles.h2}>HOME</h2>
      <p className={styles.p}>
        President's Note: MSU CS club is a place for students to foster Informational and Operational technology. A place for students to get unlimited support from staff and other students who are committed to the CS club agenda.
      </p>

      <li>Contact: csclub@minotstateu.edu</li>      
    </div>
  );
}

export default Home;
