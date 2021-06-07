import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
//import StartupScreen from "../screens/StartupScreen";
import { useDispatch } from "react-redux";

import AuthScreen,{screenOptions as AuthScreenOptions} from '../screens/AuthScreen';
import { removePushTokenSubscription } from "expo-notifications";
import UserDeclaration,{screenOptions as UserDeclarationOptions} from "../screens/UserDeclaration";
import PatientRegistration, {screenOptions as PatientRegistrationOptions} from "../screens/patient/PatientRegistration";

const defaultOptions = {
 /*  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  }, */
  //Header tint color will highlight the header text color
  headerTintColor: Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans-bold",
  },
};

const UserDeclarationStackNavigator = createStackNavigator();

export const UserDeclarationNavigator = () =>{
  return(
    <UserDeclarationStackNavigator.Navigator screenOptions={defaultOptions}>
      <UserDeclarationStackNavigator.Screen
      name="Declare"
      component={UserDeclaration}
      options={UserDeclarationOptions} />
      <UserDeclarationStackNavigator.Screen
      name="PatientRegistration"
      component={PatientRegistration}
      options={PatientRegistrationOptions} />
    </UserDeclarationStackNavigator.Navigator>
  );
}


const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={AuthScreenOptions}
      />
       <AuthStackNavigator.Screen
        name="Declare"
        component={UserDeclaration}
        options={UserDeclarationOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};

//No switch navigator in React navigation 5
