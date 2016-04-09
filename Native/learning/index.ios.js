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
      timeElapsed: null,
      running: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.timerWrapper]}>
            <Text styles={styles.timmer}>
              {formatTime (this.state.timeElapsed)}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={styles.footer}>
          <Text>
            I am a list of Laps
          </Text>
        </View>

      </View>
    );
  }
  startStopButton() {
    var style = this.state.running ? styles.stopButton: styles.startButton;
    return (
      <TouchableHighlight underlayColor="gray"
      onPress={this.handleStartPress}
      style={ [styles.startButton, styles.button] }>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
      )
  }
  lapButton() {
  return (
    <View style={styles.button}>
      <Text>
        Lap
      </Text>
    </View>
    )
  }
  handleStartPress() {
    if(this.staterunning) {
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }

    var startTime = new Date();

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new  Date()- startTime,
        running: true
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
  timmer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00cc00'
  },
  stopButton :{
    borderColor: '#CC0000'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection:  'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('learning', () => learning);
