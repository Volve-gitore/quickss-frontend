import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import CustomHeaderButton from "../components/UI/Buttons/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import COLORS from "../constants/colors";
import { logout } from "../store/actions/auth";

import Signup from "../screens/Auth/Signup";
import Login from "../screens/Auth/Login";
import BottomTab from "./BottomTab";

// import "react-native-gesture-handler";

const defaultHeaderSettings = (navigation) => {
  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
  };
};
const defaultScreenOption = {
  headerStyle: { backgroundColor: "#fff" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" },
};

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultScreenOption,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup", headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTab}
        options={{ title: "Home", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  const userAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {userAuthenticated && (
        <DrawerItem
          icon={({ focused, color, size }) => (
            <FontAwesome
              color={color}
              size={size}
              name={focused ? "power-off" : "power-off"}
            />
          )}
          label="Logout"
          onPress={handleLogout}
        />
      )}
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigation = (props) => {
  const userAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  const config = defaultHeaderSettings(props.navigation);
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: "gray",
      }}
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        borderRadius: 30,
        // padding: 40
        height: "80%",
        marginVertical: "5%",
        // backgroundColor: "blue",
      }}
      overlayColor="transparent"
      // minSwipeDistance={1}
    >
      <Drawer.Screen
        options={() => ({
          drawerIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="ios-home"
                size={size}
                color={focused ? COLORS.primary : "#979797"}
              />
            );
          },
          headerShown: false
        })}
        name="Home"
        component={BottomTab}
      />
      {!userAuthenticated && (
        <Drawer.Screen
          options={{
            title: "Login",
            headerShown: false,
            drawerIcon: ({ focused, color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="login"
                  size={size}
                  color={focused ? COLORS.primary : "#979797"}
                />
              );
            },
          }}
          name="Auth"
          component={AuthStack}
        />
      )}
    </Drawer.Navigator>
  );
};

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
