import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput , Button , TouchableWithoutFeedback} from "react-native";
import { connect } from 'react-redux';
// import ListItem from "./src/Components/ListItems/ListItem";
import PlaceList from "../../Components/PlaceLists/PlaceList";
import PlaceDetailModal from "../../Components/PlaceDetailModal/PlaceDetailModal";
import placeImage from "../../assets/city.jpg"
import {addPlace, deletePlace, selectPlace, deSelectPlace} from "../../Store/Actions/index"

 class Home extends Component {
   static navigationOptions = {
  title: 'Awsome Places',
};
  state = { 
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  onPressAdd = name => {
    console.log("onAddPlace ACTION " , this.state.placeName);
    this.props.onAddPlace(this.state.placeName);
    this.setState({
      placeName:""
    })
  }
  handleSelecteditem=e=>{
     this.props.onSelectPlace(e);
  }
  onModalClosedHandler = e => {
     this.props.onDeselectPlace();
  }
  onItemDeletedHandler = e=> {
     this.props.onDeletePlace()
  }

  render() {
    console.log("Home PAGE" , this.props);
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <View style={styles.button} >
            <Button
              color='green'
              title="Go To My Profile"
              onPress={() => navigate('Profile', {name: 'Jane'})}
              />
         </View>
        <PlaceDetailModal selectedPlace={this.props.selectedPlace}
                          onModalClosed={this.onModalClosedHandler}
                          onItemDeleted={this.onItemDeletedHandler}
        />
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button  style={styles.inputButton}
                  title="Add" onPress={this.onPressAdd}
                  />
        </View>
           <PlaceList places={this.props.places} selectedItem={this.handleSelecteditem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:"100%"

  },
  inputField: {
    backgroundColor:'#eee',
     width:'70%'
    },
    inputButton: {
      width:'30%'
      },
      addedPlaces: {
        color:'white'
      } ,
      addedPlaces : {
        width:"100%"
      },
      button: {
        margin:'2%'
      }
});
const mapStateToProps = state => {
  console.log("STATE >>>>>>>>>>>>>>>>>>>>>>>>>>>>" , state.places.places);
  return{
    places : state.places.places,
    selectedPlace : state.places.selectedPlace
  };
};
const mapDispatchToProps = dispatch =>{
  return{
      onAddPlace : (name) => dispatch(addPlace(name)),
      onDeletePlace : () => dispatch(deletePlace()),
      onSelectPlace  : (key) => dispatch(selectPlace(key)),
      onDeselectPlace : () => dispatch(deSelectPlace())
  };
};
export default connect(mapStateToProps, mapDispatchToProps )(Home);
