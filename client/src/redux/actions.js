/**
 *  Main
 */
export const showMain = (payload) => ({
  type: 'SHOW_MAIN',
  payload: {
    active: payload['title'],
    data: payload['category'],
    adverts: payload['other'],
    clickables: payload['actions']
  }
});

export const hideMain = () => ({
  type: 'HIDE_MAIN'
});

/**
 *  Cart
 */
export const showCart = () => ({
  type: 'SHOW_CART'
});

export const hideCart = () => ({
  type: 'HIDE_CART'
});

export const getCart = (payload) => ({
  type: 'GET_CART',
  payload
});

export const scrollCart = (payload) => ({
  type: 'SCROLL_CART',
  payload
});

/**
 *  Login
 */
export const showLogin = () => ({
  type: 'SHOW_LOGIN'
});

export const hideLogin = () => ({
  type: 'HIDE_LOGIN'
});

export const userLogin = () => ({
  type: 'USER_LOGGED_IN'
});

export const userLogout = () => ({
  type: 'USER_LOGGED_OUT'
});

/**
 *  Search
 */
export const showSearch = () => ({
  type: 'SHOW_SEARCHES'
});

export const hideSearch = () => ({
  type: 'HIDE_SEARCHES'
});

export const searchItems = (payload) => ({
  type: 'SEARCH_ITEMS',
  payload
});

export const getHistory = (payload) => ({
  type: 'GET_HISTORY',
  payload
});

export const clearHistory = () => ({
  type: 'CLEAR_HISTORY'
});

export const setRegex = (payload) => ({
  type: 'SET_REGEX',
  payload
});
