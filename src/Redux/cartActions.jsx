export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';


export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_PRICE_FILTER = 'SET_PRICE_FILTER';  

export const SET_CART = 'SET_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});


export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  payload: category,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setPriceFilter = (priceRange) => ({
  type: SET_PRICE_FILTER,
  payload: priceRange,
});

export const setCart = (cartItems) => ({
  type: SET_CART,
  payload: cartItems,
});
