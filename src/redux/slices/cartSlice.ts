import { createSlice } from "@reduxjs/toolkit";

interface CartSlice {
  cartItems: Array<Object>;
  loading: boolean;
  error: string;
}

const initialState: CartSlice = {
  cartItems: [],
  loading: false,
  error: "",
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    resetCartData: () => initialState,
  },
});

export const { setLoading, setError, resetCartData } = cart.actions;

export default cart.reducer;
