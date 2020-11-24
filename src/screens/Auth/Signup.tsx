import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import COLORS from "../../constants/colors";
import Input from "../../components/UI/Input";

import * as yup from "yup";
import * as authAction from "../../store/actions/auth";

interface Props {
  navigation: {
    replace: (arg0: string) => void;
    navigate: (arg0: string) => void;
  };
}

interface User {
  email: string;
  phoneNo: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface FormikProps {
  handleChange: (e: string | React.ChangeEvent<any>) => void;
  handleBlur: (e: string | React.ChangeEvent<any>) => void;
  values: User;
  touched: {
    email: boolean | undefined;
    phoneNo: boolean | undefined;
    username: boolean | undefined;
    password: boolean | undefined;
    confirmPassword: boolean | undefined;
  };
  errors: {
    email?: boolean | undefined;
    phoneNo?: boolean | undefined;
    username?: boolean | undefined;
    password?: boolean | undefined;
    confirmPassword?: boolean | undefined;
  };
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const signupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  phoneNo: yup.string().min(3, "Too short").max(15).required("Required"),
  username: yup.string().min(3, "Too short").max(15).required("Required"),
  password: yup.string().min(8, "Too short").max(30).required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match"),
});

const Signup = (props: Props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (user: User) => {
    return await dispatch(authAction.signup(user));
  };

  return (
    <ImageBackground
      style={styles.img}
      source={require("../../assets/images/backImg_.jpg")}
    >
      <ScrollView>
        <Formik
          initialValues={{
            email: "",
            phoneNo: "",
            username: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async (values, actions) => {
            try {
              setIsLoading(true);
              await handleSignup(values);
              return props.navigation.replace("Home");
            } catch (error) {
              setIsLoading(false);
              Alert.alert("Something went wrong!", `${error}`, [
                { text: "OK" },
              ]);
            }
            actions.setSubmitting(false);
          }}
          validationSchema={signupSchema}
        >
          {(formikProps: FormikProps) => (
            <View>
              {/* app logo section */}
              <View style={styles.headerContainer}>
                <Text style={styles.header}>QuicKss</Text>
              </View>

              {/* login form section */}
              <View style={styles.inputContainer}>
                <Input
                  iconName="md-mail"
                  autoCapitalize="none"
                  placeholder="email"
                  onChangeText={formikProps.handleChange("email")}
                  onBlur={formikProps.handleBlur("email")}
                  value={formikProps.values.email}
                  error={formikProps.touched.email && formikProps.errors.email}
                />
                <Input
                  iconName="md-phone-portrait"
                  autoCapitalize="none"
                  placeholder="phone"
                  onChangeText={formikProps.handleChange("phoneNo")}
                  onBlur={formikProps.handleBlur("phoneNo")}
                  value={formikProps.values.phoneNo}
                  error={
                    formikProps.touched.phoneNo && formikProps.errors.phoneNo
                  }
                />
                <Input
                  iconName="md-person"
                  autoCapitalize="none"
                  placeholder="username"
                  onChangeText={formikProps.handleChange("username")}
                  onBlur={formikProps.handleBlur("username")}
                  value={formikProps.values.username}
                  error={
                    formikProps.touched.username && formikProps.errors.username
                  }
                />
                <Input
                  iconName="md-lock"
                  placeholder="password"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={formikProps.handleChange("password")}
                  onBlur={formikProps.handleBlur("password")}
                  value={formikProps.values.password}
                  error={
                    formikProps.touched.password && formikProps.errors.password
                  }
                />
                <Input
                  iconName="md-lock"
                  placeholder="confirm password"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={formikProps.handleChange("confirmPassword")}
                  onBlur={formikProps.handleBlur("confirmPassword")}
                  value={formikProps.values.confirmPassword}
                  error={
                    formikProps.touched.confirmPassword &&
                    formikProps.errors.confirmPassword
                  }
                />

                {/* login button */}
                <TouchableOpacity
                  style={styles.btnSignup}
                  onPress={() => formikProps.handleSubmit()}
                >
                  {isLoading ? (
                    <ActivityIndicator size="large" />
                  ) : (
                    <Text>Signup</Text>
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.optionsContainer}>
                {/* signup section */}
                <View style={styles.signupBtnContainer}>
                  <Text style={styles.txtNormal}>Have an account?</Text>
                  <Text
                    style={{ ...styles.txtNormal, color: COLORS.primary }}
                    onPress={() => props.navigation.navigate("Login")}
                  >
                    {" "}
                    Sign in
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 140,
  },
  header: {
    fontWeight: "400",
    color: COLORS.primary,
    fontSize: 35,
    fontStyle: "normal",
    letterSpacing: 4,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, .7)",
  },
  txtNormal: {
    fontSize: 16,
    color: "whitesmoke",
    marginVertical: 15,
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
  },
  btnSignup: {
    width: "70%",
    borderRadius: 45,
    height: 40,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  signupBtnContainer: {
    flexDirection: "row",
  },
});
