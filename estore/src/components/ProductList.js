import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, title: "iphone xs", price: 1200, stock: 2 },
        { id: 2, title: "iphone xs max", price: 1400, stock: 1 },
        { id: 3, title: "pixel 3", price: 800, stock: 10 },
        { id: 4, title: "Note 9", price: 900, stock: 8 }
      ]
    };
    //this.handleSellClick = this.handleSellClick.bind(this);
  }

  handleSellClick = id => {
    let { products } = this.state;
    let index = products.findIndex(p => p.id === id);
    let productToUpdate = { ...products[index] };
    productToUpdate.stock--;
    products.splice(index, 1);
    products.splice(index, 0, productToUpdate);
    this.setState({ products: products });
  };

  _renderProducts() {
    let items = [];
    for (let p of this.state.products) {
      if (p.stock > 0) {
        items.push(
          <ProductListItem
            product={p}
            onSale={this.handleSellClick}
            key={p.id}
          />
        );
      }
    }

    return items;
    // return this.state.products.map(p => (
    //   <ProductListItem product={p} onSale={this.handleSellClick} key={p.id} />
    // ));
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
