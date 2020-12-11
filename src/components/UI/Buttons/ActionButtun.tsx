import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import COLORS from "../../../constants/colors";

const ActionButton = (props: {
  isLoading: boolean;
  label: string;
  pressed: () => void;
}) => {
  const { isLoading, label, pressed } = props;
  return (
    <TouchableOpacity style={styles.btn} onPress={pressed}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={styles.btnText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    borderRadius: 7,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    marginVertical: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
    color: COLORS.primary,
  },
});
