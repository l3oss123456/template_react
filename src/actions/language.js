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
      dispatch(set_data(data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};
