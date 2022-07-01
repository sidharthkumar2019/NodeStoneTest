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
 * @function ImageScreen
 **/

export const ImageScreen = ({navigation}) => {
  const [image, setImage] = useState();
  const [cloudImg, setCloudImg] = useState();
  const {user} = useContext(AuthContext);

  const getCloudUrl = async() => {
    const url = await storage().ref(user.uid).getDownloadURL();
    return url;
  };

  const handleCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: false,
      });
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async () => {
    if (image == null || image == '') return;

    const uploadUri = image;
    // let filename = uploadUri.substring(uploadUri.lastIndexOf('/')+1);
    try {
      await storage().ref(user.uid).putFile(uploadUri);
      Alert.alert('SUCCESS!', 'Your image has been uploaded successfully.');

      let downloadUrl = await getCloudUrl();
      setCloudImg(downloadUrl);

    } catch (error) {
      console.log(error);
    }

    setImage(null);
  };

  return (
    <ScrollView style={{
      padding: 20,
      paddingTop: 50,
    }}>
      <FormButton
        buttonTitle="Choose from camera"
        onPress={() => handleCamera()}
      />
      <FormButton
        buttonTitle="Choose from gallery"
        onPress={() => handleGallery()}
      />

      <FormButton buttonTitle="Post" onPress={() => handlePost()} />
    
      <View style={styles.container}>
        {cloudImg !== null ? 
        (
          <Image 
          source={{uri: cloudImg}} 
          style={styles.image} 
          />
        ) : 
        <FormButton buttonTitle="View Image" onPress={() => handleViewImg()} />
        }
      </View>
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
  image: {
    width: windowWidth/2,
    height: windowHeight/2,
    resizeMode: 'contain'
  },
});
