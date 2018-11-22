import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Vismaya welcomes you!!"
    };
    this.fruits = ["Apple", "Banana", "Chikoo"];
  }

  getMessage() {
    return "This is your message";
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <AddProduct />
        <ProductList />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
