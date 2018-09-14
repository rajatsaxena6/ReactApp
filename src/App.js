import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Counterss from "./components/counterss";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counter1 = [...this.state.counters];
    const index = counter1.indexOf(counter);
    counter1[index] = { ...counter };
    counter1[index].value++;

    this.setState({ counters: counter1 });
  };

  handleDelete = counterid => {
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counter });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counterss
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
