import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}> { this.props.header } </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    alignSelf: 'stretch',
    backgroundColor: 'powderblue',
    height: 60,
    paddingTop: 15,
    textAlign: 'center',
  }
});
