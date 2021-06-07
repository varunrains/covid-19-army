import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import * as Notifications from "expo-notifications";
import { createStore, combineReducers, applyMiddleware } from "redux";
import AppNavigator from "./navigation/AppNavigator";

//This is called local notifications
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={(error) => {
          console.log(error);
        }}
      />
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({});
