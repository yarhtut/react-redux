import React, {
	AppRegistery,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';

class DayItem extends Component {
	render() {
		return (
			<Text style={styles.day}>
       {this.props.day}
			</Text>
		)
	}
}

const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#6677ff',
  }
})

export default DayItem;