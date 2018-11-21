import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, title: "iphone xs", price: 1200, stock: 200 },
        { id: 2, title: "iphone xs max", price: 1400, stock: 100 },
        { id: 3, title: "pixel 3", price: 800, stock: 300 },
        { id: 4, title: "Note 9", price: 900, stock: 120 }
      ]
    };
  }

  _renderProducts() {
    return this.state.products.map(p => <ProductListItem product={p} />);
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        {this._renderProducts()}
      </div>
    );
  }
}

export default ProductList;
