import React from "react";
import Product from "./product";
import "./store.css";

const store = (props) => {
  const products = [
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
  ];

  // console.log(this.props.cats);
  let categoryList = [];

  // for (let key in this.state.showCategories) {
  //   if (this.state.showCategories[key] === true) {
  //     categoryList.push(key);
  //   }
  // }

  // let categoryList = this.props.cats.filter((cat) => {
  //   return cat.checked === true;
  // });

  //returns an array of objects where checked is true
  let newList = props.cats.filter((cat) => {
    return cat.checked === true;
  });

  //loops through the array of objects to push the category names in an array
  for (let cat of newList) {
    categoryList.push(cat.name);
  }

  // console.log(categoryList);

  //checks the category products in the state against those in the filtered categories
  let itemsToShow = products
    .filter((item) => {
      for (let cat in categoryList) {
        if (item.category === categoryList[cat]) {
          return item;
        }
      }
      return null;
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
};

export default store;
