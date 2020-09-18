import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Login = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>This is login screen</Text>
      <StatusBar style='auto' />
      <Button
        title='Signup'
        onPress={() => props.navigation.navigate("signup")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Login;
