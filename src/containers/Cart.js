import React, { Component } from "react";
import Backdrop from "../components/Backdrop";
import Item from "../components/CartItem";
import Modal from "../components/Modal";
import OrderSummary from "../components/OrderSummary";

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
      <div>
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
          <button onClick={this.purchased} disabled={this.state.purchased}>
            Buy Now
          </button>
        </Modal>

        <div>
          {this.props.cart.cartItems.length > 0 ? (
            <div>Items in your Cart</div>
          ) : (
            <div>
              Your Heavenly Cart is empty. Add some celestial objects to your
              cart, you Earthling.
              <hr></hr>
            </div>
          )}
        </div>
        <div className='cart-items'>{items}</div>
        <div>Total Items in Cart: {+this.props.cart.cartItems.length}</div>
        <div>Total Price: {+this.props.cart.totalPrice}</div>
        <button
          type='button'
          onClick={this.buyNow}
          disabled={this.props.cart.cartItems.length < 1}
        >
          Checkout
        </button>
      </div>
    );
  }
}

export default Cart;
