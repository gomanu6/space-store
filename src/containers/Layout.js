import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Store from "./Store";

class Layout extends Component {
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

  new = "hello";
  render() {
    return (
      <div>
        <Toolbar
          productCategories={this.state.categories}
          toggled={this.toggleView}
        />
        <Store cats={this.state.categories} />
        <div className='cart'>Cart</div>
      </div>
    );
  }
}

export default Layout;
