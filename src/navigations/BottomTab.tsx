import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import AppLauncher from "../screens/AppLauncher";
import "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import Cart from "../screens/Cart";
import Favorites from "../screens/Favorites";

import UserProfile from "../screens/UserProfile";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultScreenOption = {
  headerStyle: { backgroundColor: "#fff" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" },
  headerShown: false,
};
const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOption}>
      <Stack.Screen name="Like" component={Favorites} options={{ title: "Like" }} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultScreenOption,
      }}
    >
      <Stack.Screen
        name="Start"
        component={AppLauncher}
        options={{ title: "app", headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={defaultScreenOption}
    >
      <Stack.Screen
        name="Settings"
        component={UserProfile}
        options={{ title: "Setting" }}
      />
    </Stack.Navigator>
  );
};
const BottomTab = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#DB005B",
          style: {
            position: "absolute",
            borderRadius: 20,
            margin: 10,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="ios-home"
                color={focused ? COLORS.primary : "#979797"}
                size={22}
              />
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="ios-cart"
                color={focused ? COLORS.primary : "#979797"}
                size={22}
              />
            ),
          }}
        />
        <Tab.Screen
          name="likes"
          component={FavoritesStack}
          options={{
            tabBarLabel: "Like",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="ios-heart"
                color={focused ? COLORS.primary : "#979797"}
                size={22}
              />
            ),
          }}
        />

        <Tab.Screen
          name="user profile"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome
                name="user"
                color={focused ? COLORS.primary : "#979797"}
                size={22}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return <HomeStack />;
};

export default BottomTab;
