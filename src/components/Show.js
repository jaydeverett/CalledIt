import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Show extends React.Component {
  render() {
    const { show, i, predictions } = this.props;
    return (
      <figure>
        <div>
          <Link to={`/view/${show.code}`}>
            <img src={show.display_src} alt={show.name} height="338" width="225" className="grid-photo"/>
          </Link>
        </div>
        <p>{show.name}</p>
      </figure>
    );
  }
}


export default Show;
