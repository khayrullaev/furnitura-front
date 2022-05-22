import axios from "axios";
import envs from "../../env";
import { Alert } from "react-native";

const url = envs.local.API_URL;

export const api = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { data, status } = error.response;
    if (
      status === 400 ||
      status === 401 ||
      status === 404 ||
      status === 422 ||
      status === 500
    ) {
      Alert.alert("Request Error", data.message);
    }
  }
);
