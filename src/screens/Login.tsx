import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert
} from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import COLORS from "../constants/colors";
import Input from "../components/UI/Input";
import SocialIcon from "../components/SocialIcon";

import * as yup from "yup";
import * as authAction from "../store/actions/auth";

interface Props {
  navigation: {
    replace: (arg0: string) => void;
    navigate: (arg0: string) => void;
  };
}

interface FormikProps {
  handleChange: (e: string | React.ChangeEvent<any>) => void;
  handleBlur: (e: string | React.ChangeEvent<any>) => void;
  values: {
    username: string;
    password: string;
  };
  touched: {
    username?: boolean | undefined;
    password?: boolean | undefined;
  };
  errors: {
    username?: boolean | undefined;
    password?: boolean | undefined;
  };
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

interface User {
  username: string;
  password: string;
}

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(3)
    .max(15),
  password: yup
    .string()
    .required()
    .min(8)
    .max(30)
});

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (user: User) => {
    return await dispatch(authAction.login(user.username, user.password));
  };

  return (
    <ScrollView>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/backImg_.jpg")}
      >
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, actions) => {
            try {
              setIsLoading(true);
              await handleLogin(values);
              return props.navigation.replace("Home");
            } catch (error) {
              setIsLoading(false);
              Alert.alert("Something went wrong!", `${error}`, [
                { text: "OK" }
              ]);
            }
            actions.setSubmitting(false);
          }}
          validationSchema={loginSchema}
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
                  iconName='md-person'
                  autoCapitalize='none'
                  placeholder='username'
                  onChangeText={formikProps.handleChange("username")}
                  onBlur={formikProps.handleBlur("username")}
                  value={formikProps.values.username}
                  error={
                    formikProps.touched.username && formikProps.errors.username
                  }
                />
                <Input
                  iconName='md-lock'
                  placeholder='password'
                  autoCapitalize='none'
                  secureTextEntry
                  onChangeText={formikProps.handleChange("password")}
                  onBlur={formikProps.handleBlur("password")}
                  value={formikProps.values.password}
                  error={
                    formikProps.touched.password && formikProps.errors.password
                  }
                />

                {/* forgot password section */}
                <TouchableOpacity style={{ width: "70%" }}>
                  <Text style={{ ...styles.txtNormal, textAlign: "right" }}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>

                {/* login button */}
                <TouchableOpacity
                  style={styles.btnLogin}
                  onPress={() => formikProps.handleSubmit()}
                >
                  {isLoading ? (
                    <ActivityIndicator size='large' />
                  ) : (
                    <Text>Login</Text>
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.optionsContainer}>
                <Text style={styles.txtNormal}>or Login with</Text>

                {/* social login section */}
                <View style={styles.socialIconsContainer}>
                  <SocialIcon iconName='logo-google' color='#4285F4' />
                  <SocialIcon iconName='logo-twitter' color='#1DA1F2' />
                  <SocialIcon iconName='logo-instagram' color='#AE2764' />
                </View>

                {/* signup section */}
                <View style={styles.signupBtnContainer}>
                  <Text style={styles.txtNormal}>Don't have an account?</Text>
                  <Text
                    style={{ ...styles.txtNormal, color: COLORS.primary }}
                    onPress={() => props.navigation.navigate("signup")}
                  >
                    {" "}
                    Sign up
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 150
  },
  header: {
    fontWeight: "400",
    color: COLORS.primary,
    fontSize: 35,
    fontStyle: "normal",
    letterSpacing: 4
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .7)"
  },
  txtNormal: {
    fontSize: 16,
    color: "whitesmoke",
    marginVertical: 15
  },
  socialIconsContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-between"
  },

  optionsContainer: {
    flex: 1,
    alignItems: "center",
    height: 170
  },
  btnLogin: {
    width: "70%",
    borderRadius: 45,
    height: 40,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  signupBtnContainer: {
    flexDirection: "row"
  }
});
