import { combineReducers } from "redux";
import loginInfoReducer from "./loginInfo";
import languageReducer from "./language";
import themeReducer from "./theme";

const rootReducers = combineReducers({
  loginInfo: loginInfoReducer,
  language: languageReducer,
  theme: themeReducer,
});
export default rootReducers;
