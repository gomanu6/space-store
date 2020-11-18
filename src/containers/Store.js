import React, { Component } from "react";
import Product from "../components/product";
import "./store.css";

class Store extends Component {
  state = {
    products: [
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 1,
      },

      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 2,
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 3,
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 4,
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 5,
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 5,
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 5,
      },
    ],
  };

  render() {
    return (
      <div className='store-grid'>
        {this.state.products.map((product) => {
          return (
            <Product
              className='product'
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Store;
