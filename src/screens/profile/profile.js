import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput , Button , TouchableOpacity , Image} from "react-native";
class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'PROFILE',
  };
  render() {
    console.log("PROFILEs");
    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity onPress={this.props.onPressListItem}>
      <View style={styles.container} >

        <Text>
           JAMES PROFILE .. ;)
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
export default ProfileScreen;
