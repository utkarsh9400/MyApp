import React from 'react';
import './ProductBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const ProductBox = ({ product, onClick }) => (
  <div className="box" onClick={() => onClick(product)}>
    <div>
      <img src={product.imageSrc} height="250px" width="100%" alt={product.name} />
    </div>
    <div className='image_div'></div>
    <div className='product_detail'>
      <p className="name">{product.name}</p>
      <span className="s1">{product.category}</span>
      <span className="s2">{`$${product.price}`}</span>
      <div className='d-flex justify-content-between mt-2 pt-1'>
        <div className='rating pt-1 mt-1'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
        </div>
        <div className='cart'>
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
      </div>
    </div>
  </div>
);

export default ProductBox;
