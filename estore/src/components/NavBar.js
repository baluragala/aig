import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/add">Add Product</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
