import React, { Component } from "react";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      title: "dell xps"
    };
    this.handleChange = this.handleChange.bind(this);
    this.setRef = this.setRef.bind(this);
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

  render() {
    console.log("render-AddProduct");
    return (
      <div>
        <button onClick={() => alert(this.priceRef.value)}>GET</button>
        <button onClick={() => (this.priceRef.value = Math.random())}>
          SET
        </button>
        <form>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="number" ref={this.setRef} />
        </form>
      </div>
    );
  }
}

export default AddProduct;
