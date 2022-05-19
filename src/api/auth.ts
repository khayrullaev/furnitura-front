import { api } from "../utils";
import { LoginApiResponse } from "../types/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = async (email: string, password: string) => {
  try {
    const { data }: LoginApiResponse = await api.post("/auth/login", {
      email,
      password,
    });
    if (data.status === 0) return false;

    await AsyncStorage.setItem("accessToken", data.data.token);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.data.token}`;
    return true;
  } catch (error: any) {
    console.log(error);
  }
};

export const authApi = { login };
