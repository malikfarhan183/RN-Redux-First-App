/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import configureStore from './src/Store/configureStore';
import App from './App';
const store=configureStore();
const RnRedux = () => {
  return(
  <Provider store={store}>
     <App />
  </Provider>)
}

AppRegistry.registerComponent("AwesomeProject", () => RnRedux);
