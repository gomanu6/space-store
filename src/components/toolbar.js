import React from "react";
import "./toolbar.css";

const toolbar = (props) => {
  // console.log(props);
  return (
    <div className='toolbar'>
      <span>Choose a category:</span>
      <form className='category-form'>
        {props.productCategories.map((category) => {
          return (
            <span className='category-item' key={category.id}>
              <label htmlFor={category.name} key={category.id}>
                <input
                  type='checkbox'
                  key={category.id}
                  name={category.name}
                  checked={category.checked}
                  onChange={(event) => props.toggled(event, category.id)}
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
};

export default toolbar;
