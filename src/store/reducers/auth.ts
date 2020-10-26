import { AUTHENTICATE, LOGOUT } from "../actions/auth";

const initialState = {
  user: {},
  token: "",
  isLoggedIn: false,
};

const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATE:
      return {
        ...state,
        user: { ...state.user, ...payload.user },
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
