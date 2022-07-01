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
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

/**
 * @author
 * @function ProfileScreen
 **/

export const ProfileScreen = ({ navigation }) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome {user.uid}</Text>
        <FormButton buttonTitle='Logout' onPress={() => logout()} />
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
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
});
