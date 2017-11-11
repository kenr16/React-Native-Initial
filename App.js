import React, { Component } from 'react';
import { ActivityIndicator, Image, ListView, Text, View } from 'react-native';



class Tile extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}!</Text>
        <Image source={{ uri: this.props.pic }} style={{width: 200, height: 150}}/>
      </View>
    );
  }
}


export default class LotsOfTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://clothing-api.herokuapp.com/items')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 40}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 40}}>
        <Text>This is a test</Text>
        {/*
        <Tile name='1986 Raiders Jacket' pic='http://s7d1.scene7.com/is/image/ShiekhShoes/19-0676.1A?$shiekh_large$'/>
        <Tile name='Pink Sweatervest' pic='https://cdnc.lystit.com/photos/2013/02/20/brooks-brothers-pink-intarsia-sweater-vest-product-1-6567030-719884497.jpeg' />
        <Tile name='Rainbow Leggings' pic='https://rlv.zcache.com/rainbow_flag_leggings-r55446fff4e70446fb3bca6fbcf838ebb_68vic_324.jpg?rlvnet=1' />
        <Tile name='Plaid Skirt' pic='https://cdn.shopify.com/s/files/1/1117/2438/products/dotcomme41_copy_grande.jpg?v=1465780640' />
        <Tile name='80s Parachute Pants' pic='https://cdn-img-2.wanelo.com/p/e3c/da4/c19/1575006c506844fe68e80b6/x354-q80.jpg' />
        */}

        {/*
        <Tile dataSource={this.state.dataSource} pic={this.state.dataSource.url} name={this.state.dataSource.name} />
        */}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}, {rowData.url}</Text>}
        />
      </View>
    );
  }
}
