import { setLocalStorage, removeLocalStorage } from "../../Utils/storage";

export const GET_LOGIN_INFO = `GET_LOGIN_INFO`;
export const SET_LOGIN_INFO = `SET_LOGIN_INFO`;
export const LOGIN_INFO_ERROR = `LOGIN_INFO_ERROR`;

export const set_login_info = (post) => {
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
      dispatch(set_login_info(data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};

export const clearLoginInfo = () => {
  return async (dispatch, getState) => {
    try {
      removeLocalStorage(`loginInfo`);
      dispatch(set_login_info(null));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};
