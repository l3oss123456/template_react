import { setLocalStorage } from "../../Utils/storage";

export const GET_LANGUAGE = `GET_LANGUAGE`;
export const SET_LANGUAGE = `SET_LANGUAGE`;
export const LANGUAGE_ERROR = `LANGUAGE_ERROR`;

export const set_data = (post) => {
  return {
    type: "SET_LANGUAGE",
    data: post,
  };
};
export const set_error = (post) => {
  return {
    type: "SET_LANGUAGE",
    data: post,
  };
};
export const receive_error = (error) => {
  return {
    type: "LANGUAGE_ERROR",
    error: error,
  };
};

export const editLanguage = (data) => {
  return async (dispatch, getState) => {
    try {
      setLocalStorage(`language`, data);
      dispatch(set_data(data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};
