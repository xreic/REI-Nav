// Dependencies
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import preloadedState from './preloadedState';

// Reducers
import { upperNav, lowerNav, cartQuantity, xCoords } from './reducers';

const rootReducer = combineReducers({
  upperNav,
  lowerNav,
  cartQuantity,
  xCoords
});

const store = createStore(
  rootReducer,
  preloadedState(),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
