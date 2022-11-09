import React, { Component } from "react";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <span className="navbar-brand mb-0 h1">store</span>
              <span className="navbar-brand mb-0 h1">
                <span className="badge bg-info">{this.props.totalCount}</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
