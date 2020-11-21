import React from "react";

const cartItem = (props) => {
  return (
    <div className='cart-item'>
      <div className='item-name'>{props.name}</div>
      <div className='item-price'>{props.price}</div>
    </div>
  );
};

export default cartItem;
