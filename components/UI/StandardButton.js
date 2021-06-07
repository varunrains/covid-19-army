import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';

const StandardButton = props => {
    return (
        <Pressable {...props} style={[styles.button, props.style]} >
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
      );

}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginHorizontal:20
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily:'open-sans'
      },
});

export default StandardButton;