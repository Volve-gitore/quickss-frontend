import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";

const SocialIcon = (props: {iconName: string }) => {
  return (
    <TouchableOpacity
      style={styles.icon}
    >
      <Ionicons name={props.iconName} size={35} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
    paddingHorizontal: 9,
    borderRadius: 200,
    backgroundColor: "white"
  },
});
