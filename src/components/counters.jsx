import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0, product: "water" },
        { id: 2, value: 1, product: "bread" },
        { id: 3, value: 2, product: "honey" },
        { id: 4, value: 3, product: "potato" },
      ],
    };
    this.calcProductCount();
  }
  delete = (counterId) => {
    let counters = this.state.counters.filter(
      (counter) => counter.id != counterId
    );
    console.log("DDDDD", counters);
    this.setState({ counters }, () => {
      this.calcProductCount();
    });
  };
  reset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters }, () => {
      this.calcProductCount();
    });
  };

  dec = (counterId) => {
    let counters = this.state.counters.map((counter) => {
      if (counter.id == counterId) {
        counter.value--;
      }
      return counter;
    });
    this.setState({ counters }, () => {
      this.calcProductCount();
    });
  };

  incr = (counterId) => {
    let counters = this.state.counters.map((counter) => {
      if (counter.id == counterId) {
        counter.value++;
      }
      return counter;
    });
    this.setState({ counters }, () => {
      this.calcProductCount();
    });
  };

  calcProductCount() {
    let count = 0;
    this.state.counters.map((counter) => {
      count += counter.value;
    });
    this.props.productCountOnParent(count);
  }
  componentDidUpdate(props, state) {
    console.log("props", props);
    console.log("state", state);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.reset}>
          Reset Counters
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            deleteOnParent={this.delete}
            incrOnParent={this.incr}
            decOnParent={this.dec}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
