import React, { useState, useEffect } from "react";
import AppNavigation from "./src/navigations/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/store/configureStore";
import SafeAreaView from "react-native-safe-area-view";
import SafeAreaProvider from "react-native-safe-area-context";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };
    setIsReady(true);
  }, []);
  if (!isReady) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
