/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 'use strict';

const React = require('react-native');
const Firebase = require('firebase');
const styles = require('./styles.js');

const StatusBar = require('./src/components/StatusBar');
const ActionButton = require('./src/components/ActionButton');
const ListItem = require('./src/components/ListItem');

const {
  Component,
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} = React;

const FirebaseUrl = 'https://firereactbasenative.firebaseio.com/';

class fbApp extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        })
      };
      this.itemsRef = this.getRef().child('items');
    }

    getRef() {
      return new Firebase(FirebaseUrl);
    }

    listenForItems(itemsRef) {
      itemsRef.on('value', (snap) => {

        // get children as an array
        var items = [];
        snap.forEach((child) => {
          items.push({
            title: child.val().title,
            _key: child.key()
          });
        });

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });

      });
    }

    componentDidMount() {
      this.listenForItems(this.itemsRef);
    }

    render() {
      return (
        <View style={styles.container}>

          <StatusBar title="Grocery List" />

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            style={styles.listview}/>

          <ActionButton onPress={this._addItem.bind(this)} title="Add" />

        </View>
      )
    }

    _addItem() {
      Alert.alert(
        'Add New Item',
        null,
        [
          {
            text: 'Add',
            onPress: (text) => {
              this.itemsRef.push({ title: text })
            }
          },
        ],
        'plain-text'
      );
    }

    _renderItem(item) {

      const onPress = () => {
        Alert.alert(
          'Complete',
          null,
          [
            {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
            {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
          ],
          'default'
        );
      };

      return (
        <ListItem item={item} onPress={onPress} />
      );
    }

  }

AppRegistry.registerComponent('fbApp', () => fbApp);
