
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput , Button , TouchableOpacity , Image} from "react-native";

class Login extends React.Component {
  static navigationOptions = {
    title: 'Please Login',
  };
  render() {
    console.log("Login Componnet");
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Login"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
      </View>
    );
  }
}
export default Login;
