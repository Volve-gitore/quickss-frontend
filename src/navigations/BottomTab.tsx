import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import Cart from "../screens/Cart";
import HomeStack from "../navigations/Stack/HomeStack";
import FavoritesStack from "../navigations/Stack/FavoriteStack";
import UserStack from "../navigations/Stack/UserStack";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const BottomTab = props => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);  
  return (
    <Tab.Navigator
    initialRouteName={props.activeTab || "Home"}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#DB005B",
        style: {
          position: "absolute",
          borderRadius: 20,
          marginBottom: 5,
          marginHorizontal: 20
        },
      }}
    >
      <Tab.Screen
        name="Home"
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
        name="Likes"
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
        name="Profile"
        component={UserStack}
        options={{
          tabBarVisible: isLoggedIn,
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
};

export default BottomTab;
