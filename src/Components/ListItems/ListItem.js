
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput , Button , TouchableOpacity , Image} from "react-native";
export default class ListItem extends Component {
  render() {
    console.log("Render Of List Item " , this.props.placeName);
    return (
      <TouchableOpacity onPress={this.props.onPressListItem}>
      <View style={styles.container} >
        <Image resizeMode="cover" style={styles.cityImage} source={this.props.placeImage}></Image>
        <Text>
        {this.props.placeName}
        </Text>
        </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
     width:'100%',
     marginTop:10,
     padding:10,
     backgroundColor:'#eee',
     flexDirection:'row',
     alignItems:"center"
  },
  cityImage:{
    width:30,
    height:30,
    marginRight:8
  }
});
