import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PhoneTextField from "./PhoneTextField";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Input = (props: any) => {
  const { label, type, error, showPassword, onPasswordShow } = props;
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{label}</Text>

        {type === "phone" ? (
          <PhoneTextField {...props} />
        ) : type === "password" ? (
          <View style={{ flexDirection: "row" }}>
            <TextInput
              secureTextEntry={showPassword}
              {...props}
              style={{ ...styles.txtInput, flex: 10 }}
            />
            <TouchableOpacity style={{ flex: 1 }} onPress={onPasswordShow}>
              {showPassword ? (
                <Ionicons name="ios-eye" size={34} color="white" />
              ) : (
                <Ionicons name="ios-eye-off" size={34} color="white" />
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <TextInput {...props} style={styles.txtInput} />
        )}
      </View>
      <Text style={{ color: "yellow", marginHorizontal: 20 }}>{error}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: "white",
  },
  inputGroup: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 10,
    alignSelf: "center",
    paddingBottom: 10,
  },
  txtInput: {
    fontWeight: "400",
    color: "#E5E5E5",
    fontSize: 15,
    lineHeight: 20,
    paddingVertical: 7,
  },
});
