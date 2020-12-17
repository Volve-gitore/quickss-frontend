import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import COLORS from "../constants/colors";

const NotFound = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.img}
        source={require("../assets/images/not-found.png")}
      />
      <Text style={styles.text}>Ooops! nothing found</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  screen: {
    height: "95%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: "50%",
    height: "30%",
  },
  text: {
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "700",
    color: COLORS.primary,
    marginVertical: 30,
  },
});
