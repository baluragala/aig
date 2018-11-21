import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./components/ProductList";

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
        <ProductList />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
