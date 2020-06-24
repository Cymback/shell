import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import * as React from 'react';

export default function App() {

  async function pushApprovedV2() {

    const url = 'https://testmobile.iot.care/app/workspace/changesignin2fa' + status;
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
          authorization: 'b8cad92bc52896eadb1bf265b785f90f'
        }
      });
      if (response.ok) {
        console.log('Got what we wanted' + response.status);
      } else {
        console.log('Failed to get what we wanted, got status: ' + response.status);
      }
      return "okay";
    } catch (e) {
      console.log('An actual error!');
      return "network error";
    }
  }


  // function pushApproved() {
  //   console.log('Approved Login message');
  //   fetch('https://testmobile.iot.care/app/workspace/changesignin2fa', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       authorization: 'b8cad92bc52896eadb1bf265b785f90f'
  //     },
  //     body: JSON.stringify(
  //         {
  //           plat4muserid: 'sac.steen.amelungs',
  //           signin: '1',
  //         })
  //   });
  // }

  function pushDeclined() {
    console.log('Declined login request')
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
    });
  }

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={{height: 40, width: 65, margin: 20}} onPress={pushApprovedV2}>
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
    {container: {
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
