import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Show from './Show';
import Predictions from './Predictions';

class Single extends React.Component{
  render() {
    const showId  = this.props.params;
    //index of the post
    const i = this.props.shows.findIndex((show) => show.code === showId);
    const show = this.props.shows[i];

    const postPredictions = this.props.predictions[showId] || [];

    return (
      <div className="single-show">
        <Show i={i} show={show} {...this.props} />
        <Predictions postPredictions={postPredictions} {...this.props} />
      </div>
    );
  }
}

export default Single;
