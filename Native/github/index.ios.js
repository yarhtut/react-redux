/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

var Main = require('./App/Components/Main');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

class github extends Component {
  render() {
    return (
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Github Notetaker',
        component: Main
      }}
      />
    );
  }
}



AppRegistry.registerComponent('github', () => github);
