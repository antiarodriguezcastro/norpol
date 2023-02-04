import React from 'react';

import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Catalog from './pages/catalog/catalog';
import Contact from './pages/contact/contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
