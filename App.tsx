import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {getPushNotificationPermissions} from './functions/Permissions';

export default function App() {
  useEffect(() => {
    getPushNotificationPermissions(); // Ask for push permission on startup app, can be changed
  });

  function pushApproved() {
    console.log('Approved Login message');
    fetch('https://testmobile.iot.care/app/workspace/changesignin2fa', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: 'b8cad92bc52896eadb1bf265b785f90f'
      },
      body: JSON.stringify(
          {
            plat4muserid: 'sac.steen.amelungs',
            signin: '1',
          })
    }).then(response => response.json())
        .then(data => {
          console.log('Success' + data);
        }).catch((error) => console.error('Error', error)
    );
  }

  function pushDeclined() {
    console.log('Declined login request');
    fetch('https://testmobile.iot.care/app/workspace/changesignin2fa', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: 'b8cad92bc52896eadb1bf265b785f90f'
      },
      body: JSON.stringify(
          {
            plat4muserid: 'sac.steen.amelungs',
            signin: '2',
          })
    }).then(response => response.json())
        .then(data => {
          console.log('Success' + data);
        }).catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={{height: 40, width: 65, margin: 20}} onPress={pushApproved}>
            <Text style={styles.TextStyle}>Approve</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={{height: 40, width: 65, margin: 20}} onPress={pushDeclined}>
            <Text style={styles.TextStyle}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create(
    {
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
