import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet } from 'react-native';
// ****************************




// ****************************

export default class FlexDirectionsBasics extends Component {
  render() {
    return (
      // justifyContent 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'
      // alignItems 'flex-start', 'center', 'flex-end', 'stretch'
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

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
// ****************************
