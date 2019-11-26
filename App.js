import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator  , createMaterialTopTabNavigator} from 'react-navigation-tabs';
import HomeScreen from "./src/screens/home/home"
import ProfileScreen from "./src/screens/profile/profile"
import ListItem from "./src/Components/ListItems/ListItem"
import Login from "./src/screens/auth/login"

const MainNavigator = createMaterialTopTabNavigator({
  Login:{screen: Login },
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen },
});
const Nevigation = createAppContainer(MainNavigator);
export default Nevigation;
