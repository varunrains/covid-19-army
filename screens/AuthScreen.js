import React, { useReducer, useCallback, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button,
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import Input from "../components/UI/Input";
import StandardButton from "../components/UI/StandardButton";

import Card from "../components/UI/Card";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

//import * as authActions from "../../store/actions/auth";
import Colors from "../constants/Colors";

const AuthScreen = (props) => {
  const [isOtpSectionVisible, setIsOtpSectionVisible] = useState(false);
  //const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    trigger,
  } = useForm({ mode: "onBlur" });
  //console.log(useForm());
  //const { isDirty, isValid } = formState;
  const onSubmit = (data) => {
    console.log(data,props.navigation);
    props.navigation.navigate('Declare');
  };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              label="Phone Number"
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="phone-pad"
              //editable={!isOtpSectionVisible}
              error={errors?.phoneNumber}
              errorText={errors?.phoneNumber?.message}
              placeholder="Phone Number"
            />
          )}
          name="phoneNumber"
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number is not valid",
            },
          }}
        />
        {!isOtpSectionVisible && (
          <StandardButton
            disabled={!isDirty || !isValid}
            title="Get OTP"
            style={{ backgroundColor: "#ec5990", marginTop:10 }}
            onPress={async() => {
              await trigger('phoneNumber');
              setIsOtpSectionVisible((prevState) => !prevState);
            }}
          />
        )}
        {isOtpSectionVisible && (
          <View style={styles.screen}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  label="OTP"
                  placeholder="Enter OTP"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  keyboardType="phone-pad"
                  error={errors?.otp}
                  errorText={errors?.otp?.message}
                />
              )}
              name="otp"
              rules={{
                required: "OTP is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "OTP entered is not valid",
                },
              }}
            />
              <StandardButton
                title="Login"
                onPress={handleSubmit(onSubmit)}
                style={{ backgroundColor: "#ec5990" , marginTop:10}}
                disabled={!isDirty || !isValid}
              />
         </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: "Authenticate",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#0e101c",
  },
   input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    marginTop: 5,
    color: "white",
    height: "8%",
    backgroundColor: "#ec5990",
    borderRadius: 4,
    alignItems: "stretch",
    elevation: 3,
    justifyContent: "center",
  },
});

export default AuthScreen;
