/** @format */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
// import Fancy from './src/Fancy';
// import FetchAPI from './src/FetchAPI';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {name as appName} from './app.json';

const Main = () => (
    <Provider store={store}><App/></Provider>
)

AppRegistry.registerComponent(appName, () => Main);
