import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import store, { history } from './store'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import rootReducer from './reducers/index';

// import compose from 'recompose';

import './styles/style.css';

import App from './components/App';
import ShowGrid from './components/ShowGrid';
import Single from './components/Single';

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/" component={ShowGrid}/>
            <Route path="/view/:showId" component={Single}/>
          </Switch>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
