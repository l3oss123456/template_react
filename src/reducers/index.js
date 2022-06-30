import { combineReducers } from "redux";
import languageReducer from "./language";
import themeReducer from "./theme";

const rootReducers = combineReducers({
  language: languageReducer,
  theme: themeReducer,
});
export default rootReducers;
