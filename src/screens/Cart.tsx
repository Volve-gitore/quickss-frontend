import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import COLORS from "../constants/colors";

const CartScreen = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text>Cart screen</Text>
      <Text>Comming soon...</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
