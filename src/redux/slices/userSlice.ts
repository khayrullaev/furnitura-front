import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../utils";

interface UserSlice {
  userData: Object;
  likedProducts: Object;
  loading: boolean;
  error: string;
}

const initialState: UserSlice = {
  userData: {},
  likedProducts: {},
  loading: false,
  error: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setLikedProducts: (state, action) => {
      state.likedProducts = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetUserData: () => initialState,
  },
});

export const {
  setLoading,
  setUserData,
  setLikedProducts,
  setError,
  resetUserData,
} = user.actions;

export default user.reducer;

export const getProfileInfo = () => async (dispatch: any) => {
  const token = await AsyncStorage.getItem("accessToken");

  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api.get("/user/info").then(({ data }) => {
      dispatch(
        setUserData({
          ...data.data,
        })
      );
    });
    return true;
  } else return false;
};
