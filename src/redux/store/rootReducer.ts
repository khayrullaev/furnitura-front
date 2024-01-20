import { combineReducers } from "redux";
import user from "../slices/userSlice";
import orders from "../slices/ordersSlice";
import cart from "../slices/cartSlice";

export default combineReducers({
  user,
  orders,
  cart,
});
