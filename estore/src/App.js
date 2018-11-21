import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

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
      <div style={{ backgroundColor: "lightblue", border: "1px solid green" }}>
        <p>{1 + 2}</p>
        <p>{"hello".toUpperCase()}</p>
        <p>{this.getMessage()}</p>
        <p>{1 > 10 ? "yes" : "no"}</p>
        <ul>
          {this.fruits.map(f => (
            <li className="item">{f}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
