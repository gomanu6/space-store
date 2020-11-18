import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Store from "./Store";

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar></Toolbar>
        <Store />
        <div className='cart'>Cart</div>
      </div>
    );
  }
}

export default Layout;
