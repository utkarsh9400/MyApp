import React from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className="left d-flex">
        <img src="/images/logo.png" alt="Logo" className='logo'/>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">MAGAZINE</a></li>
        </ul>
      </div>

      <div className="right d-flex">
        <div className="search me-4">
        <a href="#"><FaSearch /></a>
        </div>

        <div className="cart-login me-4">
        <a href="#"><FaShoppingCart /></a>
        </div>
        <div className="cart-login"><a href="#">LOGIN</a>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
