import React, { useReducer, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.input, props.error && styles.border, props.style]}
        {...props}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical:10
  },
  wrapper: {
    marginHorizontal: 20,
  },
  border: {
    borderWidth: 1,
    borderColor: "red",
  },
  label: {
    color: "white",
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    fontFamily: "open-sans",
  },
});

export default Input;
