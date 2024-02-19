/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Test from './web/src/share/test';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Test);
