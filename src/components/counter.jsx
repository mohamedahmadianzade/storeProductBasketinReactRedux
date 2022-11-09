import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    // let { counter } = this.props;
    // this.state = {
    //   counter,
    //   value: counter.value,
    //   product: counter.product,
    //   disabled : counter.value == 0,
    // };
  }

  render() {
    const { counter, decOnParent, incrOnParent, deleteOnParent } = this.props;
    return (
      <div>
        <b className="m-2">{this.props.counter.product} :</b>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-danger m-2"
          onClick={() => decOnParent(counter.id)}
          disabled={counter.value == 0}
        >
          -
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => incrOnParent(counter.id)}
        >
          +
        </button>

        <button
          className="btn btn-danger m-2"
          onClick={() => deleteOnParent(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value == 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "zero" : value;
  }
}

export default Counter;
