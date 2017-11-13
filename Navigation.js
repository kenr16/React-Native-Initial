import { StackNavigator } from 'react-navigation';
import TileScreen from './TileScreen'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class HomeScreen extends React. Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Tile Screen"
        onPress={() =>
          navigate('Tiles', { newProp: 'Insert Prop Here' })
        }
      />
    );
  }
}

const AppNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Tiles: { screen: TileScreen },
});

export default AppNavigation;
