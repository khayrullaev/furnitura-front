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
    addToCart: (state: any, action: any) => {
      state?.cartItems.push({ ...action.payload, quantity: 1 });
    },

    increment: (state: any, action: any) => {
      const item = state.cartItems.find(
        (item: any) => item._id === action.payload
      );
      item.quantity++;
    },

    decrement: (state: any, action: any) => {
      const item = state.cartItems.find(
        (item: any) => item._id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeItem: (state: any, action: any) => {
      const renewedCart = state.cartItems.filter(
        (item: any) => item._id !== action.payload
      );
      state.cartItems = renewedCart;
    },

    setLoading: (state) => {
      state.loading = true;
    },

    setError: (state: any, action: any) => {
      state.error = action.payload;
    },
    resetCartData: () => initialState,
  },
});

export const {
  addToCart,
  increment,
  decrement,
  removeItem,
  setLoading,
  setError,
  resetCartData,
} = cart.actions;

export default cart.reducer;
