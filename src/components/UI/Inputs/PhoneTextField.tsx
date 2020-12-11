import React from "react";
import PhoneInput from "react-native-phone-number-input";

const PhoneTextField = (props: any) => {
  const { iconName, error } = props;
  return (
    <PhoneInput
      codeTextStyle={{
        color: "white",
        backgroundColor: "transparent",
      }}
      disableArrowIcon
      countryPickerButtonStyle={{
        justifyContent: "flex-start",
        flex: 1,
      }}
      // defaultValue={"7"}
      placeholder={"7xxxxxxxx"}
      defaultCode="RW"
      autoFocus
      containerStyle={{
        backgroundColor: "transparent",
      }}
      textContainerStyle={{
        backgroundColor: "transparent",
        flex: 12,
      }}
      textInputStyle={{
        color: "white",
      }}
      layout="second"
  
      {...props}
    />
  );
};

export default PhoneTextField;
