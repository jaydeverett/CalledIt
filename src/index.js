import React from 'react';
import { render } from 'react-dom';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import './styles/style.css';

import App from './components/App';
import Main from './components/Main';
import ShowGrid from './components/ShowGrid';
import Single from './components/Single';

const target = document.querySelector('#root')


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
