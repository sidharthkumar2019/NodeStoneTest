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
  TextInput,
} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {windowHeight, windowWidth} from '../utils/dimensions';
import firestore from '@react-native-firebase/firestore';
import FormInput from '../components/FormInput';

/**
 * @author
 * @function TextScreen
 **/

export const TextScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [text, setText] = useState('');
  const [textData, setTextData] = useState();

  const getTextEntries = async () => {
    try {
      let querySnapshots = await firestore()
        .collection('TextDocument')
        .where('userId', '==', user.uid)
        .orderBy('createdAt', 'desc')
        .get();

      const tempTextData = [];
      querySnapshots.forEach(documentSnapshot => {
        tempTextData.push({
            value: documentSnapshot.data().value,
            createdAt: documentSnapshot.data().createdAt
        });
      });
      setTextData(tempTextData);

    } catch (error) {
      console.log(error);
    }
  };

  const submitTextEntry = async () => {
    if (text.length < 5) return;
    try {
      await firestore().collection('TextDocument').add({
        userId: user.uid,
        value: text,
        createdAt: new Date()
      });
      alert('entry added.');
      setText('');

      getTextEntries();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={{
        padding: 20,
        paddingTop: 50,
      }}>
      <FormInput
        labelValue={text}
        onChangeText={input => setText(input)}
        placeholderText="Write something."
        numberOfLines={2}
      />
      <FormButton buttonTitle="submit" onPress={() => submitTextEntry()} />
      <FormButton buttonTitle="Get texts" onPress={() => getTextEntries()} />

      <ScrollView
        style={{
          padding: 20,
          paddingTop: 50,
          paddingBottom: 50,
        }}>

        {textData &&
          textData.map((ele,idx) => {
            return <Text key={idx} style={styles.text}> - {ele.value}</Text>;
          })}
      </ScrollView>
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
