import {
  GET_LOGIN_INFO,
  SET_LOGIN_INFO,
  LOGIN_INFO_ERROR,
} from "../Actions/loginInfo";
import { getLocalStorage } from "../../Utils/storage";

const languageReducer = (
  state = getLocalStorage(`loginInfo`) ? getLocalStorage(`loginInfo`) : null,
  action
) => {
  switch (action.type) {
    case GET_LOGIN_INFO:
      return state;
    case SET_LOGIN_INFO:
      return action.data;
    case LOGIN_INFO_ERROR:
      return action.error;

    default:
      return state;
  }
};
export default languageReducer;
