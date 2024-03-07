import React from 'react';
import './Aside.css'; 
import { FaAngleDown} from 'react-icons/fa';

const Aside = () => {
  return (
    <div className="aside">
      <div>
        <p id="filter">FILTER BY</p>
        <div className='filter_options'>
          <p>Collection</p>
          <a href="#"><FaAngleDown /></a>
        </div>
        <hr/>
        <div className='filter_options'>
          <p>Color</p>
          <a href="#"><FaAngleDown /></a>
        </div>
        <hr/>
        <div className='filter_options'>
          <p>Category</p>
          <a href="#"><FaAngleDown /></a>
        </div>
        <hr/>
      </div>
      <div className="pricerange">
        <p>Price Range</p>
        <input type="range" min="1" max="100" value="34" className="slider" id="myRange" />
        <span>$0</span>
        <span id="s1">$10000+</span>
      </div>
    </div>
  );
};

export default Aside;
