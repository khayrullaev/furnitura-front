import { api } from "../utils";

const getStoreProducts = async (category: string) => {
  try {
    const { data } = await api.get(`/product/store?category=${category}`);
    if (data.status === 0) return null;
    return data;
  } catch (error) {
    console.log("Store -> ", error);
  }
};

export const storeApi = { getStoreProducts };
