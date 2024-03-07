import React from 'react';
import './ProductDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCircle, faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({ imageSrc, name, category, price, description }) => (
  <div className="product-detail d-flex justify-content-center">
    <img src={imageSrc} alt={name} height="350px" width="350px" className='me-3' />
    <div className='next_arrow mx-4'>
    <FontAwesomeIcon icon={faArrowRight} className='arrow mx-2'/>
    </div>
    <div className='details ms-3'>
      <div className='mb-3 pb-3'>
        <p className='subtitle pt-2 pb-2'>{category}</p>
        <h2 className='title pb-2'>{name}</h2>
        <p className='description pt-1'>{description}</p>
      </div>
      <div className='my-3'>
        <p className='subtitle mb-3'>Color</p>
        <FontAwesomeIcon icon={faCheckCircle} className='icon_gray me-2'/>
        <FontAwesomeIcon icon={faCircle} className='icon_black' />
      </div>
      <div className='mt-3 pt-3'>
        <p className='subtitle'>Price per unit</p>
        <div className='d-flex price mt-2'>
          <h2 className="title me-2">{`$${price}`}</h2>
          <button className='btn mx-3'>Buy Now</button>
          <FontAwesomeIcon icon={faCartPlus} className='icon' />
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetail;
