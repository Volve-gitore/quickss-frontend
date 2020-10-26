import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import HomeScreen from "../screens/Home";
import AppLauncher from "../screens/AppLauncher";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="start"
          component={AppLauncher}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="home" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
