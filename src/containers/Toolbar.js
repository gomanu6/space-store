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

  toggleView = (event, id) => {
    const clickName = event.target.name;
    console.log(id);
    console.log(clickName);
    const stateChange = this.state.categories.filter((cat) => {
      return cat.name === clickName;
    });

    // const newState = { ...stateChange[0] };
    // console.log(stateChange[0].checked);
    // newState.checked = !stateChange[0].checked;
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
                    onChange={this.toggleView}
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
