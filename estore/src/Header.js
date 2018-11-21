import React, { Component } from "react";

class Header extends Component {
  render() {
    let mainHead = "E-Store";
    return (
      <header>
        <h1>{mainHead}</h1>
        <h3>An Exclusive Store For All Electronics</h3>
      </header>
    );
  }
}

export default Header;
