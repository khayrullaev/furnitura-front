import { api } from "../utils";

const getCollections = async () => {
  try {
    const { data } = await api.get("/collections/list");
    if (data.status === 0) return null;
    return data;
  } catch (error) {
    console.log("Home -> ", error);
  }
};

export const newsApi = { getCollections };
