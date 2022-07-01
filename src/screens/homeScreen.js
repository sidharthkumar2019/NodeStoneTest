import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {windowWidth} from '../utils/dimensions';
import PushNotification from 'react-native-push-notification';


/**
 * @author
 * @function HomeScreen
 **/

export const HomeScreen = ({ navigation }) => {
  const onPress = () => {
    alert('Pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowWidth/2,
    width: windowWidth/2,
    borderRadius: windowWidth/4,
    backgroundColor: 'red'
  },
});
