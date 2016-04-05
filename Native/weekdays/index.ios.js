// Import some code we need 
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DayItem from './src/day-item';

const DAYS = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ,'Sunday'];



// Create a react Component
class Weekdays extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text >
          Days of the week: 
        </Text>
        <DayItem day={DAYS[0]}/>
      </View>
    )
  }
}
//Style the React Component 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  }

});

// Show the react componenet on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);


// Show the react component on the screen


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Yar Native!             
          !!!!!!!!
          what the fuck
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('weekdays', () => weekdays);*/
