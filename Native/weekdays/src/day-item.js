import React, {
	AppRegistery,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';

class DayItem extends Component {
	render() {
		return(
			<Text style={this.style()}>
       {this.props.day}
			</Text>
		)
	}

  style() {
    return {
      color: this.color(),
      //fontWeight: this.fontWeight(),
     fontSize: this.fontSize(),
     lineHeight: this.lineHeight()
 
    }
  }

  color() {
    const opacity = 1 / this.props.daysUntil;
    return 'rgba(0,0,0, ' + opacity + ')';
  }

  // fontWeight() {
  //   const weight = 7 - this.props.daysUntil;
  //   return weight ;
  // }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }
  
  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
}

export default DayItem;

