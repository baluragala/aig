import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Vismaya welcomes you!!",
      isLoggedIn: true
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
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/add" component={AddProduct} />
          <Route
            path="/products/:id"
            render={props => {
              if (this.state.isLoggedIn)
                return <ProductDetail {...props} additionalInfo="test" />;
              else return <Redirect to="/login" />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
