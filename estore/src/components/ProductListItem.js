import React, { Component } from "react";

class ProductListItem extends Component {
  constructor() {
    super();
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.onSale(this.props.product.id);
  };
  render() {
    console.log("render-product list item");
    const { title, stock, price } = this.props.product;
    return (
      <div>
        <h2>
          {title}({stock})
        </h2>
        <h4>{price}</h4>
        <button onClick={this.handleClick}>Sell</button>
      </div>
    );
  }
}

export default ProductListItem;
