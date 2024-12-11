import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCountChange = (value) => {
    this.setState((prevState) => ({
      count: prevState.count + value,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <div>
          <label>Count: {this.state.count}</label>
        </div>
        <button onClick={() => this.handleCountChange(1)}>Increment</button>
        <button onClick={() => this.handleCountChange(-1)}>Decrement</button>
      </div>
    );
  }
}

export default App;
