import React from "react";
import "./modal.css";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <div>
      <div
        className='Modal'
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;