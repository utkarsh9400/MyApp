import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDescription/ProductDetail';
import Main from './components/Main/Main';


const App = () => {
  
  return (
    <div className='contain'>
      <header><Navbar /></header> 
      <Router>
        <Routes>
        <Route path="/mobiles" element={<ProductDetail/>} /> 
        <Route path="/" element={<Main />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
