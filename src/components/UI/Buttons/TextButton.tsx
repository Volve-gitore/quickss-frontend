import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
 } from "react-native";
 
const TextButton = (props: { text: string; pressed: () => void }) => {
  const { text, pressed } = props;
  return (
    <TouchableOpacity onPress={pressed}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "whitesmoke",
    marginVertical: 15,
    fontWeight: "700",
  },
});
