import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";

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
          <NavBar />
        </div>
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/add" component={AddProduct} />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
