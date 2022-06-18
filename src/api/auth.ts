import { api } from "../utils";
import { AuthApiResponse, UserObjectType } from "../types/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = async (email: string, password: string) => {
  try {
    const { data }: AuthApiResponse = await api.post("/auth/login", {
      email,
      password,
    });
    if (data.status === 0) return false;

    await AsyncStorage.setItem("accessToken", data.data.token);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.data.token}`;
    return true;
  } catch (error: any) {
    console.log("Login -> ", error);
  }
};

const signup = async (userObject: UserObjectType) => {
  try {
    const { data }: AuthApiResponse = await api.post("/auth/signup", {
      email: userObject.email,
      name: userObject.name,
      password: userObject.password,
    });

    if (data.status) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Signup -> ", error);
  }
};

const forgotPassword = async (email: string) => {
  try {
    const { data }: AuthApiResponse = await api.post("/auth/forgot-password", {
      email,
    });
    if (data.status) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("ForgotPassword -> ", error);
  }
};

export const authApi = { login, signup, forgotPassword };
