import { combineReducers } from "redux";
import { ProductCart } from "./Reducers/ProductCartReducer";
import storage from "redux-persist/lib/storage";
// for storing data in localstorage
export const persistConfig = {
  key: "Cart",
  storage,
};

export const rootReducer = combineReducers({
  Cart: ProductCart,
});
