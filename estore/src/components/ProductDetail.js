import React, { Component } from "react";

class ProductDetail extends Component {
  // componentDidMount() {
  //   if (this.props.location.search) {
  //     this.props.history.replace(
  //       this.props.history.replace(this.props.location.pathname)
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        <h1>
          Product Detail - {this.props.match.params.id},{" "}
          {this.props.location.search}
        </h1>
        <button onClick={() => this.props.history.go(-1)}>Back</button>
        <button onClick={() => this.props.history.push("/products/add")}>
          Add Product
        </button>
      </div>
    );
  }
}

export default ProductDetail;
