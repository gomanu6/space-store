import React from "react";
import "./backdrop.css";

const Backdrop = (props) => {
  const showBackdrop = props.show;
  return showBackdrop ? (
    <div className='backdrop' onClick={props.cancelled}></div>
  ) : null;
};
export default Backdrop;
