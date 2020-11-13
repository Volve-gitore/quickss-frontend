import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Login from "../screens/Auth/Login";
import SignupScreen from "../screens/Auth/Signup";
import HomeScreen from "../screens/Home";
import AppLauncher from "../screens/AppLauncher";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { logout } from "../store/actions/auth";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const token = AsyncStorage.getItem("user");
const Drawer = createDrawerNavigator();

console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn ", token);

function LikeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Like"
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Like" component={Home} options={{ title: "Like" }} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={Home}
        options={{ title: "Setting" }}
      />
    </Stack.Navigator>
  );
}
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    {/* <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
  </Drawer.Navigator>
);
const Navigation = (props: { logout: () => void }) => {
  return (
    <NavigationContainer>
      {!token ? (
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            showLabel: false,
            activeTintColor: "#DB005B",
          }}
        >
          <Tab.Screen
            name="LikeStack"
            component={LikeStack}
            options={{
              tabBarLabel: "Like",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="heart" color={"grey"} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="home"
                  color={"#DB005B"}
                  size={30}
                />
              ),
            }}
          />
          <Tab.Screen
            name="SettingsStack"
            component={SettingsStack}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="settings"
                  color={"grey"}
                  size={20}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
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
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="signup"
            component={SignupScreen}
          />
          <Stack.Screen name="Home" component={HomeStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
