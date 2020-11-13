import API from "../../utils/api";
import AsyncStorage from "@react-native-community/async-storage";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export const auntenticate = (token: string, user: any) => {
  return {
    type: AUTHENTICATE,
    payload: {
      token: token,
      user: user,
      isLoggedIn: true
    }
  };
};
export const login = (username: string, password: string) => {
  return async (dispatch: (arg0: { type: string; payload: {} }) => void) => {
    try {
      const res = await API.post("/user/auth/signin", {
        username,
        password
      });
      if (res.error) throw new Error(res.error);
      const { token, user } = res;
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({
          token,
          user,
          isLoggedIn: true
        })
      );
      dispatch(auntenticate(token, user));
      return res;
    } catch (error) {
      throw error;
    }
  };
};

export const logout = () => {
  return async (dispatch: (arg0: { type: string }) => void) => {
    try {
      await AsyncStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      throw error;
    }
  };
};

export const signup = (userInfo: any) => {
  return async (dispatch: (arg0: { type: string; payload: {} }) => void) => {
    try {
      const res = await API.post("/user/auth/signup", {
        ...userInfo,
      });
      if (res.error) throw new Error(res.error);
      const { token, user } = res;
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({
          token,
          user,
          isLoggedIn: true,
        })
      );
      dispatch(auntenticate(token, user));
      return res;
    } catch (error) {
      throw error;
    }
  };
};
