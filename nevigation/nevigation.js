import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "../src/screens/home/home"
import ProfileScreen from "../src/screens/profile/profile"
import ListItem from "../src/Components/ListItems/ListItem"

const MainNavigator = createStackNavigator({
  ListItem: {screen: ListItem},
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});
const Nevigation = createAppContainer(MainNavigator);
export default Nevigation;
