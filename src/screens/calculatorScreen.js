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
import {BACKEND_API} from '../utils/config';
import NumericInput from '../components/NumericInput';
import {Picker} from '@react-native-picker/picker';

/**
 * @author
 * @function CalculatorScreen
 **/

export const CalculatorScreen = ({navigation}) => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('add');
  const pickerRef = React.useRef();

  const calculate = () => {
    if (operation === 'add') {
      fetch(`${BACKEND_API}/add?a=${a}&b=${b}`, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(responseJson => {
          alert(responseJson.result);
        })
        .catch(error => {
          console.error(error);
        });
    } else if (operation === 'subtract') {
      fetch(`${BACKEND_API}/subtract?a=${a}&b=${b}`, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(responseJson => {
          alert(responseJson.result);
        })
        .catch(error => {
          console.error(error);
        });
    } else if (operation === 'multiply') {
      fetch(`${BACKEND_API}/multiply?a=${a}&b=${b}`, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(responseJson => {
          alert(responseJson.result);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const DropDownInput = ({label}) => {
    return (
        <View style={styles.item}>
          <Text style={[styles.item, {fontSize: 10}]}>
            {label}:
          </Text>
    
          <View style={{borderBottomWidth: 0.2}}>
            <Picker
              ref={pickerRef}
              selectedValue={operation}
              onValueChange={(itemValue, itemIndex) => setOperation(itemValue)}>
                <Picker.Item label='+' value='add' />
                <Picker.Item label='-' value='subtract' />
                <Picker.Item label='*' value='multiply' />
            </Picker>
          </View>
        </View>
    );
  }

  return (
    <View style={styles.container}>
      <NumericInput
        labelValue={a}
        onChangeText={input => setA(input)}
        placeholderText="value of a"
      />
      <NumericInput
        labelValue={b}
        onChangeText={input => setB(input)}
        placeholderText="value of b"
      />

      <DropDownInput label='Operation' />

      <FormButton buttonTitle="Calculate" onPress={() => calculate()} />
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
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
