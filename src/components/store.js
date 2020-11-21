import React from "react";
import Product from "./product";
import "./store.css";
import ProductList from "./productlist.json";

const store = (props) => {
  const products = ProductList;

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

  // const handleClick = () => {
  //   let prodId =
  //   props.addtocart(prodId)
  // }

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
        <div>
          <Product
            className='product'
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            key={product.pid}
            category={product.category}
            buy={props.addtocart}
            pid={product.pid}
          />
        </div>
      );
    });

  return <div className='store-grid'>{itemsToShow}</div>;
};

export default store;
