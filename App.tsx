import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import * as React from 'react';

export default function App() {

  function getData() {
    console.log('Do something');
  }
  function doSomethingElse() {
    console.log('Do something else')
  }
  return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{ height: 40, width: 60, margin: 20}} onPress={getData}>
                <Text style={styles.TextStyle}>Call</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{ height: 40, width: 60, margin: 20}} onPress={doSomethingElse}>
                    <Text style={styles.TextStyle}>Call</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
  },
  buttonContainer: {
      margin: 10,
      backgroundColor: '#6495ED',
  },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    }
});
