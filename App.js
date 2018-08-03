/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button,
} from 'react-native';
import { PushNotificationIOS } from 'react-native';
import Amplify from 'aws-amplify';
import { PushNotification } from 'aws-amplify-react-native';
import aws_exports from './aws-exports';

// PushNotification need to work with Analytics
Amplify.configure(aws_exports);



type Props = {};
export default class App extends Component<Props> {
    componentDidMount(){
        PushNotification.configure(aws_exports);

// get the notification data
        PushNotification.onNotification((notification) => {
            console.log('in app notification', notification);

            // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        });

// get the registration token
        PushNotification.onRegister((token) => {
            console.log('in app registration', token);
        });
    }
    onSetupPressed(){

    }
  render() {
    return (
      <View >

      </View>
    );
  }
}
