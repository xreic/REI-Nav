import { combineReducers } from 'redux';

const nav = () => ({
  upper: [
    'SHOP REI',
    'REI OUTLET',
    'USED GEAR',
    'REI ADVENTURES',
    'CLASSES & EVENTS',
    'EXPERT ADVICE',
    'CO-OP JOURNAL',
    'CONVERSATIONS',
    'CAMPING PROJECT'
  ],
  lower: [
    'Camp & Hike',
    'Climb',
    'Cycle',
    'Paddle',
    'Run',
    'Snow',
    'Travel',
    'Yoga',
    'Men',
    'Women',
    'Kids',
    'Deals',
    'More'
  ]
});

const main = (
  state = { visible: false, active: '', data: [], adverts: [], clickables: [] },
  action
) => {
  switch (action.type) {
    case 'SHOW_MAIN':
      return { ...state, ...action.payload };
    case 'HIDE_MAIN':
      return { ...state, visible: false };
    default:
      return state;
  }
};

const cart = (
  state = {
    visible: false,
    xCoords: 0,
    data: [],
    cartQuantity: Math.floor(Math.random() * 7)
  },
  action
) => {
  switch (action.type) {
    case 'SHOW_CART':
      return { ...state, visible: true };
    case 'HIDE_CART':
      return { ...state, visible: false };
    case 'GET_CART':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const login = (state = { visible: false, user: false, name: '' }, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return { ...state, visible: true };
    case 'HIDE_LOGIN':
      return { ...state, visible: false };
    case 'USER_LOGGED_IN':
      return { ...state, user: true };
    case 'USER_LOGGED_OUT':
      return { ...state, user: false };
    default:
      return state;
  }
};

const search = (state = { visible: false, regex: '', data: [] }, action) => {
  switch (action.type) {
    case 'SHOW_SEARCHES':
      return true;
    case 'HIDE_SEARCHES':
      return false;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  nav,
  main,
  cart,
  login,
  search
});
