import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import StandardButton from "../components/UI/StandardButton";

const UserDeclaration = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  if (showAlert) {
    Alert.alert(
      "Ethics",
      "This is a free app and we believe you to provide the accurate data to the fellow members!",
      [
        {
          text: "Okay",
          onPress: () => {
            setShowAlert(false);
            props.navigation.navigate('PatientRegistration');
          },
        },
      ]
    );
  }

  return (
    <View style={styles.screen}>
      <StandardButton
        title="I am a Patient"
        style={styles.button}
        onPress={() => {
          setShowAlert(true);
        }}
      />
      <StandardButton
        title="I am a Volunteer"
        style={styles.button}
        onPress={() => {
          setShowAlert(true);
        }}
      />
    </View>
  );
};

export const screenOptions = {
  headerTitle: "Declaration",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ec5990",
    marginTop: 40,
    height: 40,
    width: "80%",
  },
});
export default UserDeclaration;
