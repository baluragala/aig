import React, { Component } from "react";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      title: "dell xps"
    };
    this.handleChange = this.handleChange.bind(this);
    this.setRef = this.setRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("ele", document.querySelectorAll("input")[0]);
  }

  handleChange(e) {
    //console.log(e.target.value);
    this.setState({ title: e.target.value });
  }

  setRef(ref) {
    this.priceRef = ref;
    console.dir(ref);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state, this.priceRef.value);
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
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="number" ref={this.setRef} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
