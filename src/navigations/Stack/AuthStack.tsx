import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../../screens/Auth/SignIn";
import SignUp from "../../screens/Auth/Signup";
import Home from "../../screens/Home";
import defaultScreenOptions from "../DefaultScreenOptions";

const Stack = createStackNavigator();

const AuthStack = (props) => {  
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
