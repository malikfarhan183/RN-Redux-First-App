
import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, TextInput , Button , TouchableWithoutFeedback} from "react-native";
import ListItem from "../ListItems/ListItem";
import { SearchBar } from 'react-native-elements';

  var count=''

export default class PlaceList extends Component {
     state = {
    myNewArray : [],
    lengthOfArray : 15 ,
    isRefreshing : false ,
    arrayToLoadWhenLoadMoreClick : [],
    search:''
  }
  onPressListItemHandler = e => {
    console.log("onPressListItemHandler here" , e)
  }
  scrollToIndex = () => {
    console.log("scrollToIndex");
    this.setState({
      lengthOfArray : this.state.lengthOfArray + 15
     });

  // let randomIndex = Math.floor(Math.random(Date.now()) * this.props.data.length);
  // this.flatListRef.scrollToIndex({animated: true, index:70});
  this.flatListRef.scrollToEnd();

}
onEndReachedHandler = e =>{
  console.log("onEndReachedHandler ............................................called");
}
onPressLearnMore =  e=> {
  var elseRun=true
  console.log("onPressLearnMore :::"  , this.state.myNewArray.length , count );
  this.state.myNewArray.forEach((item , id) => {
    // console.log("uper");
    if(this.state.myNewArray.length-1>count)
    {
      console.log("if");
      if(id>count && id<=count+20){
        console.log("here is " , );
        this.state.arrayToLoadWhenLoadMoreClick.push(item);
      }
    }
    else{
      console.log("else");
      if(elseRun){
        console.log("elserun" , );
        this.state.arrayToLoadWhenLoadMoreClick.push("No More Data Found");
        elseRun=false
      }
    }

  });
  count=count+20;
}
  render_FlatList_footer = () => {

    var footer_View = (

    <View style={styles.header_footer_style}>

      <Button onPress={this.onPressLearnMore}title='Load More'></Button>

    </View>

    );
    return footer_View;
  };
  componentWillMount(){
    console.log("willMount");
    for(var i=1;i<=40;i++)
    {
      console.log("i" , i);
      this.state.myNewArray.push(i)
    }

    this.state.myNewArray.forEach((item , id) => {

      if(id<20){
        this.state.arrayToLoadWhenLoadMoreClick.push(item);
        count=id
      }

    });
  }
onRefresh = e=> {
  console.log("onReload Before .." , this.state.myNewArray);
  this.setState({
    isRefreshing:true,
    arrayToLoadWhenLoadMoreClick : ["Click On Button To Load Data"]
  })
    this.setState({
      isRefreshing:false
    })
  console.log("onRefresh ...... >" , this.state.myNewArray);

}
updateSearch = search => {
    this.setState({ search });
  };
render_FlatList_header = () => {

    var header_View = (

    <View style={styles.header_footer_style}>

    <SearchBar
      placeholder="Type Here..."
      onChangeText={this.updateSearch}
      value={this.state.search}
    />

    </View>

    );

    return header_View ;

  };
  render() {
    console.log("Render Of PlaceList Props" , this.state.arrayToLoadWhenLoadMoreClick );

    return (
        <View style={styles.container}>
        <FlatList style={styles.addedPlaces}
                  ref={(ref) => { this.flatListRef = ref; }}
                  data={this.state.arrayToLoadWhenLoadMoreClick}
              onEndReachedThreshold ={0.5}
              onEndReached={this.onEndReachedHandler}
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
                ListFooterComponent={this.render_FlatList_footer}
                ListHeaderComponent={this.render_FlatList_header}
                  renderItem={(info)=>(
                    <Text>{info.item}</Text>
                      /*<ListItem
                                placeName={info.item.name}
                                placeImage={info.item.image}
                               onPressListItem={()=>this.props.selectedItem(info.item.key)}
                      />*/
                  )
                  }
                 >
        </FlatList>
        <Button
              onPress={this.scrollToIndex}
              title="Go To Bottom"
              s
            />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
     width:'100%',
     height:"80%",
     marginTop:10,
     padding:10,
     backgroundColor:'#eee'
  } ,
  addedPlaces:{
    width:"100%"
  }

});
