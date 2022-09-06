import { Platform, KeyboardAvoidingView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default function App() {
  return (
    // <KeyboardAvoidingView style={styles.container} behavior='height'>
    <View style={styles.container}>
      <ImageBackground
        source={getImageForWeather('Thunder')}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>

          <Text style={[styles.largeText, styles.textStyle]} >San Francisco</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24º</Text>
          <SearchInput placeholder='buscate algo chango' />
        </ View>
      </ImageBackground>

    </View>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : "notoserif",
    color: 'white'
    // ...Platform.select({
    //   ios: {
    //     fontFamily: 'AvenirNext-Regular'
    //   },
    //   android: {
    //     fontFamily: 'monospace'
    //   }
    // })
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0,2)',
    paddingHorizontal: 20
  }
});
