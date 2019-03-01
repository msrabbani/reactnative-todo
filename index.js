/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Todo} from './App';
import Fancy from './src/Fancy';
// import FetchAPI from './src/FetchAPI';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {name as appName} from './app.json';
import TabView from 'react-native-scrollable-tab-view'

const Main = () => (
  <Provider store={store}>
    <TabView>
    <Todo tabLabel="Todo"/>
    <Fancy tabLabel="Fancy"/>
    </TabView>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
