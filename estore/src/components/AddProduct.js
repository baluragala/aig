import React, { Component } from "react";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      title: "dell xps"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //console.log(e.target.value);
    this.setState({ title: e.target.value });
  }

  render() {
    console.log("render-AddProduct");
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddProduct;
