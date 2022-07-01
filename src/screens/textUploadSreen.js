import React, {useContext, useState, Al, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import FormButton from '../components/FormButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {AuthContext} from '../navigation/AuthProvider';
import {windowHeight, windowWidth} from '../utils/dimensions';

/**
 * @author
 * @function TextScreen
 **/

export const TextScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);

  return (
    <ScrollView style={{
      padding: 20,
      paddingTop: 50,
    }}>
      <Text>text upload screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
