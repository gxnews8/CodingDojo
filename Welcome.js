import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { MonoText } from '../components/StyledText';

export default class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const loginWithSocialMedia = () => {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Sign in with Google', 'Sign in with Facebook', 'Sign in with Twitter', 'Sign in with GitHub', 'Sign in with LinkedIn', 'Sign in with phone', 'Sign in with email', 'Cancel'],
          cancelButtonIndex: 7,
          //destructiveButtonIndex: 6,
        },
        buttonIndex => {
          console.log({ buttonIndex });
        }
      );
    };

    const showShareSheet = () => {
      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          url: 'https://expo.io',
          message: 'message to go with the shared url',
          subject: 'a subject to go in the email heading',
        },
        error => alert(error),
        (success, method) => {
          if (success) {
            alert(`Shared via ${method}`);
          }
        }
      );
    };
    
    return (
      <View>
        <StatusBar hidden={true} barStyle="default" />
        <Image
          source={require('../assets/images/YouChat.png')}
          style={{width: Layout.window.width, height: Layout.window.height}}
        />
        <View style={{ flexDirection: 'row', position: 'absolute', zIndex: 1, top: 35, right: 5, paddingHorizontal: 10 }}>
          <Text style={styles.lang} onPress={loginWithSocialMedia}>English</Text>
        </View>
        <View style={{ flexDirection: 'row', position: 'absolute', zIndex: 1, bottom: 20, paddingHorizontal: 10 }}>
          <View style={styles.logInButton}><Text style={styles.logInText} onPress={loginWithSocialMedia}>Log In</Text></View>
          <View style={styles.signUpButton}><Text style={styles.signUpText} onPress={showShareSheet}>Sign Up</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lang: {
    color: '#aaa',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  logInButton: {
    width: Layout.window.width / 2.34,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginHorizontal: 10,
  },
  signUpButton: {
    width: Layout.window.width / 2.34,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 6,
    marginHorizontal: 10,
  },
  logInText: {
    fontSize: 18,
    paddingVertical: 13,
  },
  signUpText: {
    fontSize: 18,
    paddingVertical: 13,
    color: '#fff',
  },
});