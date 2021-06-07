import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const StandardDropDown = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.label}</Text>
      <DropDownPicker
        //   items={[
        //                     {label: 'France', value: 'fr'},
        //                     {label: 'Spain', value: 'es'},
        //                 ]}
        //     //defaultIndex={0}
        //     // style={[styles.input, props.error && styles.border, props.style]}
        //     //
        //     containerStyle={{position: 'relative', width: '70%', left: '15%', paddingTop: 10}}
        //     itemStyle={{alignItems: 'center'}}
        //     labelStyle={{fontSize: 14, color: 'red'}}
        //     placeholder={props.placeholder}
        // childrenContainerStyle={{
        //         height: 1030,
        //       }}
        //     //defaultIndex={1}
        // style={{
        //         backgroundColor: '#fafafa',
        //         zIndex: 10,
        //         position: 'relative',
        //       }}
        style={{ zIndex: 10 }}
        containerStyle={{ height: 40 }}
        {...props}
        listMode="SCROLLVIEW"
        //onChangeItem={item => console.log(item.label, item.value)}
      />
      {/* {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
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

export default StandardDropDown;
