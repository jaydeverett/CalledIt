import React, { Component } from 'react';
import ShowGrid from './ShowGrid.js';
import { Link } from 'react-router-dom';

class Main extends React.Component{
  render() {
    return (
      <div>
        <h1 className="main-title">
          <Link to="/">Called It</Link>
        </h1>
        <p className="main-title">Post Your TV Show Predictions</p>
        <ShowGrid {...this.props}/>
        {console.log(this.props.children)}
      </div>
    );
  }
}

export default Main;
