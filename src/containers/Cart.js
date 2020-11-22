import React, { Component } from "react";
import Backdrop from "../components/Backdrop";
import Item from "../components/CartItem";
import Modal from "../components/Modal";
import OrderSummary from "../components/OrderSummary";
import "./cart.css";

class Cart extends Component {
  state = {
    purchasing: false,
  };

  buyNow = () => {
    this.setState({
      purchasing: true,
      purchased: false,
    });
  };

  cancelled = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchased = () => {
    this.setState({
      purchased: true,
    });
    this.props.bought();
  };

  render() {
    let items = this.props.cart.cartItems.map((item) => {
      return <Item name={item.title} price={item.price} key={item.pid} />;
    });
    return (
      <div className='cart-container'>
        <Backdrop show={this.state.purchasing} cancelled={this.cancelled} />
        <Modal show={this.state.purchasing}>
          {this.state.purchased ? (
            <div>Hooray!! Your order has been placed!!</div>
          ) : (
            <OrderSummary
              items={items}
              totalPrice={+this.props.cart.totalPrice}
            />
          )}
          <button
            className='buy-now'
            onClick={this.purchased}
            disabled={this.state.purchased}
          >
            Buy Now
          </button>
        </Modal>

        <div>
          {this.props.cart.cartItems.length > 0 ? (
            <div>
              <div>
                Total Items in Cart: {+this.props.cart.cartItems.length}
              </div>
              <div>
                Total Price:{" "}
                <span className='price'>
                  {this.props.cart.totalPrice.toLocaleString("en", {
                    useGrouping: true,
                  })}
                </span>
              </div>
              <div className='cart-buttons'>
                <button
                  className='checkout-button'
                  type='button'
                  onClick={this.buyNow}
                  disabled={this.props.cart.cartItems.length < 1}
                >
                  Checkout
                </button>
                <button
                  className='empty-cart-button'
                  type='button'
                  onClick={this.props.reset}
                  disabled={this.props.cart.cartItems.length < 1}
                >
                  Empty Cart
                </button>
              </div>

              <div className='cart-heading'>Items in your Cart</div>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              Your Heavenly Cart is empty. Add some celestial objects to your
              cart, you Earthling.
              <hr></hr>
            </div>
          )}
        </div>
        <div className='cart-items'>{items}</div>
      </div>
    );
  }
}

export default Cart;
