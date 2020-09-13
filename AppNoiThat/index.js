/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BasicFlatList from './components/BasicFlatList';
import Screen from './components/Screen';
import Screen1 from './components/Screen1';

AppRegistry.registerComponent(appName, () => Screen1);
