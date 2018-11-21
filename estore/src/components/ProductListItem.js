import React, { Component } from "react";

class ProductListItem extends Component {
  render() {
    const { title, stock, price } = this.props.product;
    return (
      <div>
        <h2>
          {title}({stock})
        </h2>
        <h4>{price}</h4>
      </div>
    );
  }
}

export default ProductListItem;
