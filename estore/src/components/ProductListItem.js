import React, { Component, PureComponent } from "react";
import { Link } from "react-router-dom";
import { stringify } from "query-string";
class ProductListItem extends PureComponent {
  constructor() {
    super();
    //this.handleClick = this.handleClick.bind(this);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.product.stock != this.props.product.stock;
  // }

  handleClick = () => {
    this.props.onSale(this.props.product.get("id"));
  };

  handleDeleteClick = () => {
    this.props.onDelete(this.props.product.get("id"));
  };
  render() {
    console.log("render");
    const { title, stock, price, id } = this.props.product.toJS();
    return (
      <div>
        <h2>
          <Link to={`/products/${id}?${stringify({ related: true })}`}>
            {title}
            {stock}
          </Link>
        </h2>
        <h4>{price}</h4>
        <button onClick={this.handleClick}>Sell</button>
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export default ProductListItem;
