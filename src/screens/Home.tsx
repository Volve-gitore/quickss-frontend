import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import COLORS from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/auth";

const HomeScreen = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    props.navigation.navigate("start");
  };

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Text>Logged in user: {user.firstName + " " + user.lastName}</Text>
      <Button title="Logout" color={COLORS.primary} onPress={handleLogout} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
