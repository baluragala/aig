import React, { Component, PureComponent } from "react";

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
    this.props.onSale(this.props.product.id);
  };
  render() {
    console.log("render");
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
