import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    CLEAR_CART,
  } from './cartActions';

  import { SET_CATEGORY_FILTER } from './cartActions';
  
  const initialState = {
    cartItems: [],
    selectedCategory:"All"
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
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  