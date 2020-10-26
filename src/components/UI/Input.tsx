import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Input = (props: any) => {
    const { iconName, error } = props;
    return (
        <View>
            <View style={styles.inputGroup}>
                <Ionicons name={iconName} size={24} color={COLORS.primary} />
                <TextInput {...props} style={styles.txtInput} />
             </View>
            <Text style={{color: "red"}}>{error}</Text>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputGroup: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary,
        marginTop: 35,
    },
    txtInput: {
        width: "80%",
        fontWeight: "400",
        color: "#E5E5E5",
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 4,
        paddingLeft: 15

    },
});
