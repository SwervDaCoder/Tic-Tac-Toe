import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Game from './components/Game';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});