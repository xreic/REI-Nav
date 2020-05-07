import axios from 'axios';

/**
 *  Main
 */
export const showMain = (query) => async (dispatch) => {
  const { data } = await axios.post('/api/navbar/', query);
  dispatch({
    type: 'SHOW_MAIN',
    payload: {
      active: data[0]['title'],
      data: data[0]['category'],
      adverts: data[0]['other'],
      clickables: data[0]['actions']
    }
  });
};

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

export const getCart = (query) => async (dispatch) => {
  const { data } = await axios.post('/api/cart/', query);
  dispatch({ type: 'GET_CART', payload: data });
};

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

export const getHistory = () => async (dispatch) => {
  const { data } = await axios.get('/api/searchbar/history');
  dispatch({ type: 'GET_HISTORY', payload: data });
};

export const clearHistory = () => async (dispatch) => {
  await axios.delete('/api/searchbar/history');
  dispatch({ type: 'CLEAR_HISTORY' });
};

export const setRegex = (payload) => ({
  type: 'SET_REGEX',
  payload
});
