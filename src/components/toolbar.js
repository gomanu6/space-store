import React from "react";
import "./toolbar.css";

const toolbar = (props) => {
  // console.log(props);
  return (
    <div className='toolbar'>
      <span className='toolbar-heading'>Choose a category:</span>

      <form className='category-form'>
        {props.productCategories.map((category) => {
          return (
            <span className='category-item' key={category.cid}>
              <label htmlFor={category.name} key={category.cid}>
                <input
                  type='checkbox'
                  key={category.cid}
                  name={category.name}
                  checked={category.checked}
                  onChange={(event) => props.toggled(event, category.cid)}
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
