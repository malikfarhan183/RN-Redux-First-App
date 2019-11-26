
import React, { Component } from "react";
import { StyleSheet, Text, Button , Modal , View , Image} from "react-native";
export default class PlaceDetailModal extends Component {
  render() {
    console.log("Render Of PlaceDetailNodal 1" , this.props);
    let modalContent=null;
    if(this.props.selectedPlace!==null){
      modalContent=(
        <View>
        <Image style={styles.placeImage} source={this.props.selectedPlace.image}/>
        <Text style={styles.placeName}>{this.props.selectedPlace.name} </Text>
        </View>
      )
    }
    return (
      <Modal onRequestClose={this.props.onModalClosed}visible={this.props.selectedPlace!== null} animationType="slide">
      <View style={styles.modalContainer}>
           {modalContent}
           <View>
               <Button title="Close" onPress={this.props.onModalClosed}/>
               <Button title="Delete" color='red' onPress={this.props.onItemDeleted}/>
           </View>
      </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer:{
    margin:22
  },
  placeName:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:28
  },
  placeImage:{
    width:'100%'
  }

});
