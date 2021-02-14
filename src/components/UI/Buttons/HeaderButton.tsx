import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import { Icon } from "react-native-elements";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={35}
      color="red"
    />
  );
};

export default CustomHeaderButton;
