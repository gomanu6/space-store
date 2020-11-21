import React, { Component } from "react";
import Toolbar from "../components/toolbar";
import Store from "../components/store";
import Cart from "./Cart";
import ProductList from "../components/productlist.json";

class Layout extends Component {
  state = {
    categories: [
      {
        cid: 1,
        name: "planets",
        checked: true,
      },
      {
        cid: 2,
        name: "stars",
        checked: true,
      },
      {
        cid: 3,
        name: "asteroids",
        checked: true,
      },
      {
        cid: 4,
        name: "ships",
        checked: true,
      },
      {
        cid: 5,
        name: "accessories",
        checked: true,
      },
      {
        cid: 6,
        name: "moons",
        checked: true,
      },
    ],

    cart: {
      cartItems: [],
      totalPrice: 0,
    },
  };

  toggleView = (e, cid) => {
    // console.log(e);
    // console.log(id);

    // Find Index of the object with the product id of the category
    const catIndex = this.state.categories.findIndex((c) => {
      return c.cid === cid;
    });

    const cat = { ...this.state.categories[catIndex] };
    // console.log(catIndex);
    console.log(cat);

    cat.checked = !this.state.categories[catIndex].checked;
    console.log(cat);

    const categories = [...this.state.categories];
    categories[catIndex] = cat;

    this.setState({
      categories: categories,
    });
  };

  addToCartHandler = (event, pid) => {
    event.preventDefault();
    // console.log(event);
    // console.log(pid);
    // alert("Bought");

    // find the product id of the button clicked from the product list

    const prodToCart = ProductList.filter((prod) => {
      return prod.pid === pid;
    });

    // console.log(prodToCart[0]);
    const cartItems = [...this.state.cart.cartItems];
    // console.log(cartItems);
    cartItems.push(prodToCart[0]);
    // console.log(cartItems);

    let totalPrice = this.state.cart.totalPrice;
    // console.log(totalPrice);
    totalPrice += prodToCart[0].price;
    // console.log(totalPrice);

    // Set the State

    this.setState({
      cart: {
        cartItems: cartItems,
        totalPrice: totalPrice,
      },
    });
  };

  bought = () => {
    this.setState({
      cart: {
        cartItems: [],
        totalPrice: 0,
      },
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          productCategories={this.state.categories}
          toggled={this.toggleView}
        />
        <Store cats={this.state.categories} addtocart={this.addToCartHandler} />
        <div className='cart'>
          <Cart cart={this.state.cart} bought={this.bought} />
        </div>
      </div>
    );
  }
}

export default Layout;
