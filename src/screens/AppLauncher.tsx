import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import COLORS from "../constants/colors";
import { useDispatch } from "react-redux";
import { auntenticate } from "../store/actions/auth";

const AppLauncher = (props: {
  navigation: { replace: (arg0: string) => void };
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const autoLogin = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const userData = JSON.parse(user);
        dispatch(auntenticate(userData.token, userData.user));
        props.navigation.replace("Home");
        return;
      }
      props.navigation.replace("Home");
      return;
    };
    autoLogin();
  }, [props.navigation]);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default AppLauncher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
