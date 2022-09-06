import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
export default function SearchInput({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='white'
        clearButtonMode='while-editing'
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,

    backgroundColor: '#667',
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    color: 'white',
  }
})