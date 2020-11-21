import React from "react";
import CartItem from "./CartItem";

const OrderSummary = (props) => {
  return (
    <div>
      <div>Order Summary</div>
      <div>{props.items}</div>
      <div>Your Order Total: {props.totalPrice}</div>
    </div>
  );
};
export default OrderSummary;
