/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Firebase = require ('firebase');

const style = require('./styles.js');

class fbApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('fbApp', () => fbApp);
