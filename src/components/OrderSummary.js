import React from "react";
import CartItem from "./CartItem";
import "./ordersummary.css";

const OrderSummary = (props) => {
  return (
    <div>
      <div className='summary-title'>Order Summary</div>
      <div>{props.items}</div>
      <div>
        Your Order Total:{" "}
        {props.totalPrice.toLocaleString("en", { useGrouping: true })} $
      </div>
    </div>
  );
};
export default OrderSummary;
