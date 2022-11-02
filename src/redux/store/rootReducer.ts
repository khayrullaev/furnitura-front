import { combineReducers } from "redux";
import user from "../slices/userSlice";
import orders from "../slices/ordersSlice";

export default combineReducers({
  user,
  orders,
});
