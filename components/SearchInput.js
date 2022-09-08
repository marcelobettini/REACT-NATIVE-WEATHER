import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Text, FlatList } from "react-native";
import getCityNames from '../utils/getCityNames';
export default function SearchInput({ placeholder }) {
  const cities = getCityNames()
  const [show, setShow] = useState(false)
  const renderItem = ({ item }) => (
    <Text>{item} </Text>
  );
  return (
    <>
      <Modal
        animationType='fade'
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show);
        }}>
        <FlatList
          data={cities}
          renderItem={renderItem}
          keyExtractor={item => item} />



      </Modal>

      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor='white'
          clearButtonMode='while-editing' //iOS
          style={styles.textInput}
        />
      </View>
      <Button
        onPress={() => setShow(!show)}
        title="Full list"
        color="#841584"
        accessibilityLabel="Show list of cities"
      />
    </>
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