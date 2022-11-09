import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      totalCount: 0
    }
  }

  productCount = (totalCount) => {
    console.log("totalCount", totalCount);
    this.setState({
      totalCount
    })
  }
  render() {
    return (
      <div className="App border border-danger">
        <Navbar totalCount={this.state.totalCount}></Navbar>
        <Counters productCountOnParent={this.productCount} ></Counters>
      </div>
    );
  }
}

export default App;
