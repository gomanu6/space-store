import React, { Component } from "react";
import "./toolbar.css";

class Toolbar extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: "planets",
      },
      {
        id: 2,
        name: "stars",
      },
      {
        id: 3,
        name: "asteroids",
      },
      {
        id: 4,
        name: "ships",
      },
      {
        id: 5,
        name: "accessories",
      },
      {
        id: 6,
        name: "moons",
      },
    ],
  };
  render() {
    return (
      <div className='toolbar'>
        <span>Choose a category:</span>
        <form className='category-form'>
          {this.state.categories.map((category) => {
            return (
              <span className='category-item'>
                <label for={category.name} key={category.id}>
                  <input type='checkbox' name={category.name}></input>
                  <span>{category.name}</span>
                </label>
              </span>
            );
          })}

          <div></div>
        </form>
      </div>
    );
  }
}

export default Toolbar;
