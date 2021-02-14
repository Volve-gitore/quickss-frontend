import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfile from "../../screens/UserProfile";
import AuthStack from "../Stack/AuthStack";
import { useSelector } from "react-redux";
import defaultScreenOptions from "../DefaultScreenOptions";

const Stack = createStackNavigator();

const UserProfileStack = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return (
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name="Profile" component={UserProfile} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={defaultScreenOptions} >
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
};

export default UserProfileStack;
