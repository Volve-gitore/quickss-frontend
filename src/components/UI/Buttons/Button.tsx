import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../../../constants/colors";

const SmallButton = (props: {
  label: string;
  pressed: () => void;
  active: boolean;
}) => {
  const { label, pressed, active } = props;
  console.log(active);

  return (
    <TouchableOpacity
      style={
        active ? { ...styles.btn, backgroundColor: COLORS.primary } : styles.btn
      }
      onPress={pressed}
    >
      <Text
        style={active ? { ...styles.btnText, color: "white" } : styles.btnText}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  btn: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    marginVertical: 10,
    marginRight: 5,
    borderColor: COLORS.primary,
    borderRadius: 20,
    borderWidth: 1,
    padding: 7,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "lowercase",
    color: COLORS.primary,
  },
});
