import { api } from "../utils";

const getHomeProducts = async () => {
  try {
    const { data } = await api.get("/product/home");
    if (data.status === 0) return null;
    return data;
  } catch (error) {
    console.log("Home -> ", error);
    return {};
  }
};

export const homeApi = { getHomeProducts };
