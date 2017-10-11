import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Show from './Show';



class ShowGrid extends React.Component{
  render() {
    return (
      <div className="show-grid">
        {console.log(this.props)}
        {this.props.shows.map((show, i) => <Show {...this.props} key={i} i={i} show={show}/>)}
      </div>
    );
  }
}

export default ShowGrid;
