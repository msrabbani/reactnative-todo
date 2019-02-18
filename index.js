/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
// import Fancy from './src/Fancy';
// import FetchAPI from './src/FetchAPI';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>App</Provider>
));
