import { combineReducers } from 'redux';

const navLinks = () => ({
  upperNav: [
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
  lowerNav: [
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

// Cart modal
const showCartModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_CART':
      return true;
    case 'HIDE_CART':
      return false;
    default:
      return state;
  }
};

const xCoords = () => 0;

const cartItems = (state, action) => [];

const cartQuantity = () => Math.floor(Math.random() * 7);

// Main modal
const showMainModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_MAIN':
      return true;
    case 'HIDE_MAIN':
      return false;
    default:
      return state;
  }
};

const modalData = (state, action) => [];

const modalAdverts = (state, action) => [];

const modalClickables = (state, action) => [];

const activeCategory = (state, action) => '';

// Login modal
const showLoginModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return true;
    case 'HIDE_LOGIN':
      return false;
    default:
      return state;
  }
};

const userLoggedin = (state = false, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return true;
    case 'USER_LOGGED_OUT':
      return false;
    default:
      return state;
  }
};

const userFullname = (state, action) => '';

// Search modal
const searchRegex = (state, action) => '';

const showSearches = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_SEARCHES':
      return true;
    case 'HIDE_SEARCHES':
      return false;
    default:
      return state;
  }
};

const searchData = (state, action) => [];

export const rootReducer = combineReducers({
  navLinks,
  showCartModal,
  xCoords,
  cartItems,
  cartQuantity,
  showMainModal,
  modalData,
  modalAdverts,
  modalClickables,
  activeCategory,
  showLoginModal,
  userLoggedin,
  userFullname,
  searchRegex,
  showSearches,
  searchData
});
