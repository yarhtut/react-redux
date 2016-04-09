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
  TouchableHighlight
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

class learning extends Component {
  getInitialState () {
    return {
      timeElapsed: null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text >
              {formatTime (this.state.timeElapsed)}
            </Text>
          </View>
          <View style={[styles.buttonWrapper, this.border('green')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={ [styles.footer, this.border('blue')]}>
          <Text>
            I am a list of Laps
          </Text>
        </View>

      </View>
    );
  }
  startStopButton() {
    return (
      <TouchableHighlight underlayColor="gray"
      onPress={this.handleStartPress}>
        <Text>
          Start
        </Text>
      </TouchableHighlight>
      )
  }
  lapButton() {
  return (
    <View>
      <Text>
        Lap
      </Text>
    </View>
    )
  }
  handleStartPress() {
    var startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new  Date()- startTime
      });
    },30);
  }

  border(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },

  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection:  'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('learning', () => learning);
