import { createSlice } from "@reduxjs/toolkit";

interface OrderSlice {
  orderList: Array<Object>;
  loading: boolean;
  error: string;
}

const initialState: OrderSlice = {
  orderList: [],
  loading: false,
  error: "",
};

export const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setOrders: (state, action) => {
      state.orderList = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetOrderData: () => initialState,
  },
});

export const { setLoading, setOrders, setError, resetOrderData } =
  orders.actions;

export default orders.reducer;
