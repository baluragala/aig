import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { connect } from "react-redux";
import { getProductsAction } from "../actions/product";

class ProductList extends Component {
  constructor() {
    super();

    //this.handleSellClick = this.handleSellClick.bind(this);
  }

  handleSellClick = id => {
    // let { products } = this.state;
    // let index = products.findIndex(p => p.id === id);
    // let productToUpdate = { ...products[index] };
    // productToUpdate.stock--;
    // products.splice(index, 1);
    // products.splice(index, 0, productToUpdate);
    // this.setState({ products: products });
  };

  _renderProducts() {
    let items = [];
    for (let p of this.props.products) {
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
        <button onClick={() => this.props.dispatch(getProductsAction())}>
          GET PRODUCTS
        </button>
        {this._renderProducts()}
      </div>
    );
  }
}

function mapStateToProps(wholeApplicationState) {
  return {
    products: wholeApplicationState.products
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    dispatch
  };
}

const ConnectedProductList = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default ConnectedProductList(ProductList);
