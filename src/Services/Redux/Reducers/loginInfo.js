import {
  GET_LOGIN_INFO,
  SET_LOGIN_INFO,
  LOGIN_INFO_ERROR,
} from "../Actions/loginInfo";
import { setLocalStorage } from "../../Utils/storage";

const languageReducer = (
  state = setLocalStorage(`loginInfo`) ? setLocalStorage(`loginInfo`) : null,
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
