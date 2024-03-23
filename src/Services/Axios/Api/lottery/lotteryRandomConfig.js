import helper from "../../../Utils/helper";
import instance from "../../axiosInstance";

export const getLotteryRandomConfig = async (params = {}) => {
  try {
    return await instance.get(`/api/lottery-random-config/get-one`, {
      params: params,
    });
  } catch (error) {
    console.log(`error: `, error);
    throw error;
  }
};

export const updateLotteryRandomCurrentPosition = async (body = {}) => {
  try {
    const form_data = helper.ConvertJsonToFormData(body);

    return await instance.patch(
      `/api/lottery-random-config/update-current-position`,
      form_data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(`error: `, error);
    throw error;
  }
};
