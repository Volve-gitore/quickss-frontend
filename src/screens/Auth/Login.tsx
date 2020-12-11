import React, { useState, FC } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { IFormikProps, IProps, ICredentials } from "./types";
import ActionButton from "../../components/UI/Buttons/ActionButtun";
import TextButton from "../../components/UI/Buttons/TextButton";
import TextField from "../../components/UI/Inputs/TextField";
import SocialIcon from "../../components/SocialIcon";
import * as yup from "yup";
import * as authAction from "../../store/actions/auth";

const loginSchema = yup.object().shape({
  phoneNo: yup
    .string()
    .required("phone number is required")
    .min(9, "invalid phone number")
    .max(15),
  password: yup.string().required("password is required").min(8).max(30),
});

const Login: FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async (user: ICredentials) => {
    try {
      setIsLoading(true);
      await dispatch(authAction.login(user.phoneNo, user.password));
      props.navigation.replace("Home");
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Something went wrong!", `${error}`, [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screen} scrollEnabled={false}>
      {/* app logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Quickss</Text>
      </View>

      <Formik
        initialValues={{ phoneNo: "", password: "" }}
        onSubmit={(values, actions) => {
          handleLogin(values);
          actions.setSubmitting(false);
        }}
        validationSchema={loginSchema}
      >
        {(formikProps: IFormikProps) => (
          <View style={styles.form}>
            {/* login form */}
            <TextField
              onChangeFormattedText={(text: string) => {
                formikProps.setFieldValue("phoneNo", text);
              }}
              type="phone"
              label="Phone number"
              onBlur={formikProps.handleBlur("phoneNo")}
              value={formikProps.values.phoneNo.substring(4)}
              error={formikProps.touched.phoneNo && formikProps.errors.phoneNo}
            />
            <TextField
              label="Password"
              type="password"
              showPassword={showPassword}
              onPasswordShow={() => setShowPassword(!showPassword)}
              placeholder="Enter password"
              onChangeText={formikProps.handleChange("password")}
              onBlur={formikProps.handleBlur("password")}
              value={formikProps.values.password}
              error={
                formikProps.touched.password && formikProps.errors.password
              }
            />

            <ActionButton
              isLoading={isLoading}
              label={"Login"}
              pressed={() => formikProps.handleSubmit()}
            />
          </View>
        )}
      </Formik>

      <View style={{ flex: 2 }}>
        <View style={styles.links}>
          <TextButton
            text="Forgot password?"
            pressed={() => console.log("pressed")}
          />

          <TextButton
            text="Sign up"
            pressed={() => props.navigation.navigate("Signup")}
          />
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.txtNormal}>or Login with</Text>

          <View style={styles.socialIconsContainer}>
            <SocialIcon iconName="logo-google" />
            <SocialIcon iconName="logo-twitter" />
            <SocialIcon iconName="logo-instagram" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#D1305D",
    flex: 1,
  },
  logoContainer: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  logo: {
    fontWeight: "400",
    color: "white",
    fontSize: 35,
  },
  form: {
    flex: 2,
    alignItems: "center",
    padding: 10,
    marginBottom: 35,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal: 10,
    width: "90%",
  },
  txtNormal: {
    fontSize: 16,
    color: "whitesmoke",
    marginVertical: 15,
  },
  socialIconsContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-between",
  },
  optionsContainer: {
    alignItems: "center",
  },
});
