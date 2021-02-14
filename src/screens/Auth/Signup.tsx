import React, { FC, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { IUser, IProps, IFormikProps } from "./types";
import TextField from "../../components/UI/Inputs/TextField";
import ActionButton from "../../components/UI/Buttons/ActionButtun";
import TextButton from "../../components/UI/Buttons/TextButton";
import * as yup from "yup";
import * as authAction from "../../store/actions/auth";

const signupSchema = yup.object().shape({
  phoneNo: yup
    .string()
    .min(8, "Invalid phone number")
    .max(15)
    .required("Phone number is required"),
  fullName: yup
    .string()
    .min(3, "Too short")
    .max(15)
    .required("Full name is required"),
  password: yup
    .string()
    .min(8, "Too short")
    .max(30)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("You need to confirm your password")
    .oneOf([yup.ref("password"), ""], "Passwords doesn't match"),
});

const Signup: FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordOnConfirm, setShowPasswordConfirm] = useState(true);

  const handleSignup = async (user: IUser) => {
    try {
      setIsLoading(true);
      await dispatch(authAction.signup(user));
      props.navigation.replace("Home");
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Something went wrong!", `${error}`, [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      {/* app logo section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>QuicKss</Text>
      </View>
      <Formik
        initialValues={{
          phoneNo: "",
          fullName: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, actions) => {
          handleSignup(values);
          actions.setSubmitting(false);
        }}
        validationSchema={signupSchema}
      >
        {(formikProps: IFormikProps) => (
          <View style={styles.form}>
            {/* login form */}
            <TextField
              label="Phone number"
              type="phone"
              onChangeFormattedText={(text: string) => {
                formikProps.setFieldValue("phoneNo", text);
              }}
              onBlur={formikProps.handleBlur("phoneNo")}
              value={formikProps.values.phoneNo.substring(4)}
              error={formikProps.touched.phoneNo && formikProps.errors.phoneNo}
            />

            <TextField
              autoCapitalize="none"
              label="Name"
              placeholder="Type your full name"
              onChangeText={formikProps.handleChange("fullName")}
              onBlur={formikProps.handleBlur("fullName")}
              value={formikProps.values.fullName}
              error={
                formikProps.touched.fullName && formikProps.errors.fullName
              }
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Type your password"
              showPassword={showPassword}
              onPasswordShow={() => setShowPassword(!showPassword)}
              onChangeText={formikProps.handleChange("password")}
              onBlur={formikProps.handleBlur("password")}
              value={formikProps.values.password}
              error={
                formikProps.touched.password && formikProps.errors.password
              }
            />

            <TextField
              label="Confirm password"
              type="password"
              placeholder="Re-type your password"
              showPassword={showPasswordOnConfirm}
              onPasswordShow={() =>
                setShowPasswordConfirm(!showPasswordOnConfirm)
              }
              onChangeText={formikProps.handleChange("confirmPassword")}
              onBlur={formikProps.handleBlur("confirmPassword")}
              value={formikProps.values.confirmPassword}
              error={
                formikProps.touched.confirmPassword &&
                formikProps.errors.confirmPassword
              }
            />

            <ActionButton
              isLoading={isLoading}
              label="Sign up"
              pressed={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
      <View style={{ flex: 1 }}>
        <View style={styles.links}>
        <TextButton
            text="Back Home"
            pressed={() => props.navigation.goBack()}
          />

          <TextButton
            text="Sign in"
            pressed={() => props.navigation.navigate("SignIn")}
          />
        </View>
        
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#D1305D",
    flex: 1,
  },
  logoContainer: {
    flex: 1,
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
    flex: 5,
    alignItems: "center",
    padding: 10,
  },

  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal: 10,
    width: "90%",
  },
});
