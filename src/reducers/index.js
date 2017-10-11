
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import shows from './shows';
import predictions from './predictions';

const rootReducer = combineReducers({shows, predictions, routing: routerReducer});

export default rootReducer;
