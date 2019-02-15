/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
// import Fancy from './src/Fancy';
import FetchAPI from './src/FetchAPI';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FetchAPI);
