import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Activities from './components/Activities';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="MainBody">
        <Header />

        <div className="Main">
        
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route element={<Activities />} path="/activities" />
        </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}


export default App;
