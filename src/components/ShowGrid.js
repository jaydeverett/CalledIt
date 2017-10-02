import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class ShowGrid extends Component{
  render() {
    return (
      <div className="show-grid">
        I'm the showgrid
      </div>
    );
  }
}

export default ShowGrid;
