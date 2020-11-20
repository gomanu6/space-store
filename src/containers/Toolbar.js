import React, { Component } from "react";
import "./toolbar.css";

class Toolbar extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: "planets",
        checked: true,
      },
      {
        id: 2,
        name: "stars",
        checked: true,
      },
      {
        id: 3,
        name: "asteroids",
        checked: true,
      },
      {
        id: 4,
        name: "ships",
        checked: true,
      },
      {
        id: 5,
        name: "accessories",
        checked: true,
      },
      {
        id: 6,
        name: "moons",
        checked: true,
      },
    ],
  };

  toggleView = (e, id) => {
    // console.log(e);
    // console.log(id);

    const catIndex = this.state.categories.findIndex((c) => {
      return c.id === id;
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

  render() {
    return (
      <div className='toolbar'>
        <span>Choose a category:</span>
        <form className='category-form'>
          {this.state.categories.map((category) => {
            return (
              <span className='category-item'>
                <label for={category.name} key={category.id}>
                  <input
                    type='checkbox'
                    key={category.id}
                    name={category.name}
                    checked={category.checked}
                    onChange={(event) => this.toggleView(event, category.id)}
                  ></input>
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
