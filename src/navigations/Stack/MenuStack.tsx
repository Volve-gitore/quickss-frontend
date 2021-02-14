import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../../screens/Menu/Menu";
import MenuItem from "../../screens/Menu/MenuItem";
import defaultScreenOptions from "../DefaultScreenOptions";

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultScreenOptions,
        // headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          // title: "My home",
          // headerStyle: {
          //   backgroundColor: "transparent",
          // },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
        name="Menu"
        component={Menu}
      />
      <Stack.Screen
        name="MenuItem"
        component={MenuItem}
        options={{ title: "MenuItem" }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
