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
        category: "planets",
      },

      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 2,
        category: "planets",
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 3,
        category: "planets",
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 4,
        category: "accessories",
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 5,
        category: "ships",
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 6,
        category: "asteroids",
      },
      {
        title: "Product 1",
        description: "description",
        price: 20,
        image: "",
        id: 7,
        category: "stars",
      },
      {
        title: "Product 8",
        description: "description",
        price: 20,
        image: "",
        id: 8,
        category: "moons",
      },
    ],
    showCategories: {
      planets: true,
      stars: true,
      asteroids: true,
      ships: true,
      accessories: true,
      moons: true,
    },
  };

  render() {
    let categoryList = [];

    for (let key in this.state.showCategories) {
      if (this.state.showCategories[key] === true) {
        categoryList.push(key);
      }
    }

    let itemsToShow = this.state.products
      .filter((item) => {
        for (let cat in categoryList) {
          if (item.category === categoryList[cat]) {
            return item;
          }
        }
      })
      .map((product) => {
        return (
          <Product
            className='product'
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            key={product.id}
            category={product.category}
          />
        );
      });

    return <div className='store-grid'>{itemsToShow}</div>;
  }
}

export default Store;
