import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class Single extends Component{
  render() {
    return (
      <div className="single-show">
        I'm the single show
      </div>
    );
  }
}

export default Single;
