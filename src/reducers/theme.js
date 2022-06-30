const themeReducer = (state = `dark`, action) => {
  switch (action.type) {
    case "GET_THEME":
      return state;
    case "SET_THEME":
      return action.data;
    case "THEME_ERROR":
      return action.error;

    default:
      return state;
  }
};
export default themeReducer;
