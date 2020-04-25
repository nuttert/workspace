const initialState = {
  data: null,
  "X-Authorization": window.localStorage["X-Authorization"],
  isAuth: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_DATA":
      return {
        ...state,
        data: payload,
        isAuth: true,
        "X-Authorization": window.localStorage["X-Authorization"]
      };
    case "USER:SET_IS_AUTH":
      return {
        ...state,
        isAuth: true
      };
    default:
      return state;
  }
};
