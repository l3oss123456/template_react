import instance from "../../axiosInstance";

export const getAllProduct = async (params = {}) => {
  try {
    return await instance.get(`/api/product`, {
      params: params,
    });
  } catch (error) {
    console.log(`error: `, error);
    throw error;
  }
};
