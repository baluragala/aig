import React, { Component } from "react";
import "./AddProduct.css";
import {
  getCategoryChange,
  getTitleChange,
  addProductAction
} from "../actions/product";
import { connect } from "react-redux";

class AddProduct extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.setRef = this.setRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("ele", document.querySelectorAll("input")[0]);
  }

  handleChange(e) {
    if (e.target.name == "title") {
      this.props.dispatch(getTitleChange(e.target.value));
    }

    if (e.target.name == "category") {
      this.props.dispatch(getCategoryChange(e.target.value));
    }
  }

  setRef(ref) {
    this.priceRef = ref;
    console.dir(ref);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state, this.priceRef.value);
    this.props.dispatch(
      addProductAction({
        title: this.props.title,
        category: this.props.category,
        price: this.priceRef.value
      })
    );
  }

  render() {
    console.log("render-AddProduct");
    return (
      <div>
        <button onClick={() => alert(this.priceRef.value)}>GET</button>
        <button onClick={() => (this.priceRef.value = Math.random())}>
          SET
        </button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            name="title"
            value={this.props.title}
            onChange={this.handleChange}
          />
          <label htmlFor="price">Product Price</label>
          <input type="number" ref={this.setRef} />
          <label htmlFor="category">Product Category</label>
          <select
            name="category"
            value={this.props.catgory}
            onChange={this.handleChange}
          >
            <option value="">Select Category</option>
            <option value="ELECTRONICS">ELECTRONICS</option>
            <option value="GROCERY">GROCERY</option>
            <option value="CLOTHING">CLOTHING</option>
          </select>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(wholeApplicationState) {
  return {
    title: wholeApplicationState.productState.get("title"),
    category: wholeApplicationState.productState.get("category")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default ConnectedComponent(AddProduct);
