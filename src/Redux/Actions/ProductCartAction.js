import { ADD_TO_PRODUCT_CART, REMOVE_FROM_PRODUCT_CART } from "../Constant";

//for adding element to cart
export const AddToCart = data => {
  return {
    type: ADD_TO_PRODUCT_CART,
    payload: data,
  };
};
//for deleting element to cart
export const RemoveFromCart = data => {
  return {
    type: REMOVE_FROM_PRODUCT_CART,
    payload: data,
  };
};
