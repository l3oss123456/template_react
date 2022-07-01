import { getLocalStorage } from "../utils/storage";

const languageReducer = (
  //   state = process.env.REACT_APP_LANGUAGE_CODE,
  state = getLocalStorage(`language`) ? getLocalStorage(`language`) : `en`,
  action
) => {
  switch (action.type) {
    case "GET_LANGUAGE":
      return state;
    case "SET_LANGUAGE":
      return action.data;
    case "LANGUAGE_ERROR":
      return action.error;

    default:
      return state;
  }
};
export default languageReducer;