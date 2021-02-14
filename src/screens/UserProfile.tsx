import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import AuthStack from "../navigations/Stack/AuthStack";
import Cart from "../screens/Cart";
import { logout } from "../store/actions/auth";

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    return props.navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <Button title="Logout" color="grey" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
