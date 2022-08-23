import { ADD_TO_PRODUCT_CART, REMOVE_FROM_PRODUCT_CART } from "../Constant";
export const ProductCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_PRODUCT_CART: {
      return [...state, action.payload];
    }
    case REMOVE_FROM_PRODUCT_CART: {
      return state.filter(product => product.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
