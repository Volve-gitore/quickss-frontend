import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import AppLauncher from "../../screens/AppLauncher";
import MenuStack from "../Stack/MenuStack";
import defaultScreenOptions from "../DefaultScreenOptions";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Start" component={AppLauncher} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={MenuStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
