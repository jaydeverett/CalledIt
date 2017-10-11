import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index'
import { Route } from 'react-router'


import predictions from './data/predictions';
import shows from './data/shows';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const defaultState = {
  shows,
  predictions
}

const enhancers = []
// const middleware = [
//   thunk,
//   routerMiddleware(history)
// ]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )


// const store = createStore(
//   combineReducers({
//     rootReducer,
//     defaultState,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware)
// )

const store = createStore(
  rootReducer,
  defaultState
)

console.log(store.getState());

export default store
