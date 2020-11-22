import React from "react";
import "./cartitem.css";

const cartItem = (props) => {
  return (
    <div className='cart-item-container'>
      <hr className='item-separator' />
      <div className='cart-item'>
        <div className='item-name'>{props.name}</div>
        <div className='item-price price'>
          {props.price.toLocaleString("en", { useGrouping: true })}
        </div>
      </div>
    </div>
  );
};

export default cartItem;
