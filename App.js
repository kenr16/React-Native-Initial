import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //Toggle the state every second
    setInterval( () => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    )
  }
}

export defaul class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink!' />
        <Blink text='Yes blinking is so great!' />
        <Blink text='Why did they ever take this out of HTML?' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}


// ****************************
// class Greeting extends Component {
//
//   render() {
//
//     return (
//       <View>
//         <Text>{this.props.name}!</Text>
//         <Image source={{ uri: this.props.pic }} style={{width: 200, height: 150, boxShadow: "10px 10px 5px #888888"}}/>
//       </View>
//     );
//   }
// }
//
// export default class LotsOfGreetings extends Component {
//
//   render() {
//     let styles = {alignItems: 'center', marginTop: 100}
//     return (
//       <View style={styles}>
//         <Greeting name='1986 Raiders Jacket' pic='http://s7d1.scene7.com/is/image/ShiekhShoes/19-0676.1A?$shiekh_large$'/>
//         <Greeting name='Pink Sweatervest' pic='https://cdnc.lystit.com/photos/2013/02/20/brooks-brothers-pink-intarsia-sweater-vest-product-1-6567030-719884497.jpeg' />
//         <Greeting name='Rainbow Leggings' pic='https://rlv.zcache.com/rainbow_flag_leggings-r55446fff4e70446fb3bca6fbcf838ebb_68vic_324.jpg?rlvnet=1' />
//         <Greeting name='Plaid Skirt' pic='https://cdn.shopify.com/s/files/1/1117/2438/products/dotcomme41_copy_grande.jpg?v=1465780640' />
//         <Greeting name='80s Parachute Pants' pic='https://cdn-img-2.wanelo.com/p/e3c/da4/c19/1575006c506844fe68e80b6/x354-q80.jpg' />
//       </View>
//     );
//   }
// }
// *****************************


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
