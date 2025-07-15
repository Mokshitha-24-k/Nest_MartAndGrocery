// src/redux/cartReducer.js

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
  SET_CATEGORY_FILTER,
  SET_SEARCH_QUERY,
  SET_PRICE_FILTER,
} from './cartActions';

const initialState = {
  cartItems: [],
  selectedCategory: "All",
  query: "",
  priceRange: [0, 2000],  
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

   

      
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case SET_PRICE_FILTER:
      return {
        ...state,
        priceRange: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
