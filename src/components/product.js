import React from "react";
import "./product.css";

const product = (props) => {
  return (
    <div className='product-card'>
      <div className='product-title'>{props.title}</div>
      <div>
        <img className='product-image' src={props.source} alt='' />
      </div>
      <div className='product-descirption'>{props.description} </div>
      <div className='product-price'>{props.price} </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default product;
