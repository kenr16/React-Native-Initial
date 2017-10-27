import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    let styles = {alignItems: 'center', marginTop: 100}
    return (
      <View style={styles}>
        <Greeting name='Rexxar'/>
        <Greeting name='Jaina' />
        <Greeting name='Valeera'/>
      </View>
    );
  }
}
// export default class HelloWorldApp extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }
