import React from "react";
import AppNavigation from "./src/navigations/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/store/configureStore";
import SafeAreaView from "react-native-safe-area-view";
import SafeAreaProvider from "react-native-safe-area-context";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
