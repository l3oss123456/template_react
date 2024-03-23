import instance from "../../axiosInstance";
// import helper from "../../../Utils/helper";

export const getLastSevenDayLottery = async (params = {}) => {
  try {
    return await instance.get(`/api/lottery/get-last-seven-day-lottery`, {
      params: params,
    });
  } catch (error) {
    console.log(`error: `, error);
    throw error;
  }
};

export const getTodayLottery = async (params = {}) => {
  try {
    return await instance.get(`/api/lottery/get-today-lottery`, {
      params: params,
    });
  } catch (error) {
    console.log(`error: `, error);
    throw error;
  }
};
