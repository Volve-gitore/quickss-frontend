import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import COLORS from "../constants/colors";

const UserProfileScreen = props => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={COLORS.primary} />
      <Text>User profile screen</Text>
      <Text>Comming soon...</Text>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
