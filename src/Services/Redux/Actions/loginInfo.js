import { setLocalStorage } from "../../Utils/storage";

export const GET_LOGIN_INFO = `GET_LOGIN_INFO`;
export const SET_LOGIN_INFO = `SET_LOGIN_INFO`;
export const LOGIN_INFO_ERROR = `LOGIN_INFO_ERROR`;

export const set_data = (post) => {
  return {
    type: SET_LOGIN_INFO,
    data: post,
  };
};
export const set_error = (post) => {
  return {
    type: SET_LOGIN_INFO,
    data: post,
  };
};
export const receive_error = (error) => {
  return {
    type: LOGIN_INFO_ERROR,
    error: error,
  };
};

export const editLoginInfo = (data) => {
  return async (dispatch, getState) => {
    try {
      setLocalStorage(`loginInfo`, JSON.stringify(data));
      dispatch(set_data(data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};
