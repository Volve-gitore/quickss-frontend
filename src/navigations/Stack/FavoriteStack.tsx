import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../../screens/Favorites";
import defaultScreenOptions from "../DefaultScreenOptions";

const Stack = createStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
