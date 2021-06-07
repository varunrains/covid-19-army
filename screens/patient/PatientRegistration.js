import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Input from "../../components/UI/Input";
import StandardButton from "../../components/UI/StandardButton";
import DropDownPicker from "react-native-dropdown-picker";

import Card from "../../components/UI/Card";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import StandardDropDown from "../../components/UI/StandardDropDown";
import { DropDownData } from "../../constants/DropDownData";

const Age = () => {
  var ageArray = [];
  for (var i = 1; i <= 120; i++) {
    ageArray.push({"label":i,"value":i});
  }
  return ageArray;
};

const PatientRegistration = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    trigger,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  //console.log(DropDownData.Age());

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={93}
      style={styles.screen}
    >
      <ScrollView style={styles.container}>
        {/* <View style={styles.container}> */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              label="Patient Name"
              onChangeText={(value) => onChange(value)}
              value={value}
              //keyboardType="phone-pad"
              //editable={!isOtpSectionVisible}
              error={errors?.patientName}
              errorText={errors?.patientName?.message}
              placeholder="Patient Name"
            />
          )}
          name="patientName"
          rules={{
            required: "Patient Name is required",
          }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              label="SRF ID"
              placeholder="SRF ID"
              onChangeText={(value) => onChange(value)}
              value={value}
              //keyboardType="phone-pad"
              error={errors?.srfId}
              errorText={errors?.srfId?.message}
            />
          )}
          name="srfId"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StandardDropDown
            label="Age"
              items={Age()}
              placeholder="Select Age"
              setOpen={setOpen}
              open={open}
              value={value}
              setValue={(val) => {
                onChange(val);
              }}
            />
          )}
          name="age"
          rules={{
            required: "Age is required",
          }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StandardDropDown
              items={[
                { label: "Karnataka", value: "karnataka" },
                { label: "Delhi", value: "delhi" },
              ]}
              placeholder="Select State"
              setOpen={setOpen1}
              label="State"
              open={open1}
              value={value}
              setValue={(val) => {
                onChange(val);
              }}
            />
          )}
          name="state"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StandardDropDown
              placeholder="Select District"
              items={[
                { label: "Bangalore", value: "fr" },
                { label: "Udupi", value: "es" },
              ]}
              label="District"
              setOpen={setOpen2}
              open={open2}
              value={value}
              setValue={(val) => {
                onChange(val);
              }}
            />
          )}
          name="district"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="PIN Code *"
              onChangeText={(value) => onChange(value)}
              value={value}
              //keyboardType="phone-pad"
              error={errors?.pinCode}
              errorText={errors?.pinCode?.message}
            />
          )}
          name="pinCode"
          rules={{
            required: "Pin Code is required",
          }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="Contact Number *"
              onChangeText={(value) => onChange(value)}
              value={value}
              //keyboardType="phone-pad"
              error={errors?.contactNumber}
              errorText={errors?.contactNumber?.message}
            />
          )}
          name="contactNumber"
          rules={{
            required: "Contact number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Contact number is not valid",
            },
          }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              multiline
              numberOfLines={4}
              placeholder="Pre existing medical conditions if any"
              onChangeText={(value) => onChange(value)}
              value={value}
              //keyboardType="phone-pad"
              error={errors?.medicalCondition}
              errorText={errors?.medicalCondition?.message}
            />
          )}
          name="medicalCondition"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              multiline
              numberOfLines={4}
              placeholder="Comments..."
              onChangeText={(value) => onChange(value)}
              value={value}
              //keyboardType="phone-pad"
              error={errors?.comment}
              errorText={errors?.comment?.message}
            />
          )}
          name="comment"
        />
        <StandardButton
          title="Save"
          onPress={handleSubmit(onSubmit)}
          style={{ backgroundColor: "#ec5990", marginTop: 10 }}
          //disabled={!isDirty || !isValid}
        />

        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: "Enter Details",
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
    // //justifyContent: "center",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
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
export default PatientRegistration;
