import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';
import ShowGrid from './ShowGrid';
// import Single from './Single';
// import Show from './Show';


// import Single from './Single';
// import ShowGrid from './ShowGrid';

function mapStateToProps(state) {
  return {
    shows: state.shows,
    predictions: state.predictions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
