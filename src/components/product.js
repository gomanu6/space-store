import React from "react";
import "./product.css";

const product = (props) => {
  return (
    <div className='product-card'>
      <div className='product-title'>{props.title}</div>
      <div className='image-container'>
        <img className='product-image' src={props.source} alt={props.title} />
      </div>
      <div className='product-description'>{props.description} </div>

      <div className='product-price'>
        Price:{" "}
        <span className='price'>
          {props.price.toLocaleString("en", { useGrouping: true })}
        </span>
      </div>

      <div className='product-category'>Category: {props.category}</div>
      <button
        className='add-to-cart'
        type='button'
        name='add-to-cart'
        value='add-to-cart'
        onClick={(event) => props.buy(event, props.pid)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default product;
