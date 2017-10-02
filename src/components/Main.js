import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component{
  render() {
    return (
      <div>
        <h1 className="main-title">
          <Link to="/">Called It</Link>
        </h1>
        <p className="main-title">Post Your TV Show Predictions</p>
        {/* {React.cloneElement(this.props.children, this.props)} */}
      </div>
    );
  }
}

export default Main;
