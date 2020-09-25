import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SocialIcon = (props: { color: string; iconName: string }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.icon, backgroundColor: props.color }}
    >
      <Ionicons name={props.iconName} size={35} color="white" />
    </TouchableOpacity>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
    paddingHorizontal: 9,
    borderRadius: 12,
  },
});
