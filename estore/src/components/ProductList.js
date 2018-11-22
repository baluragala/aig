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
    //this.handleSellClick = this.handleSellClick.bind(this);
  }

  handleSellClick = id => {
    let item = this.state.products.find(p => p.id === id);
    item.stock--;
    this.setState({ products: this.state.products });
  };

  _renderProducts() {
    return this.state.products.map(p => (
      <ProductListItem product={p} onSale={this.handleSellClick} />
    ));
  }

  render() {
    console.log("render-product list");
    return (
      <div>
        <h2>Products</h2>
        {this._renderProducts()}
      </div>
    );
  }
}

export default ProductList;
