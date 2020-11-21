import React from "react";
import Item from "../components/CartItem";

const Cart = (props) => {
  let items = props.cart.cartItems.map((item) => {
    return <Item name={item.title} price={item.price} key={item.pid} />;
  });

  return (
    <div>
      <div>
        {props.cartItems
          ? "Items in your Cart"
          : "Your Cart is empty. Add some celestial objects to your cart."}
      </div>
      <div className='cart-items'>{items}</div>
      <div>Total Items in Cart: {+props.cart.cartItems.length}</div>
      <div>Total Price: {+props.cart.totalPrice}</div>
      <button type='button'>Buy Now</button>
    </div>
  );
};

export default Cart;
