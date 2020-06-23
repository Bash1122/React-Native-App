//Import the screens that are developed in javascript

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import Todo from './screens/Todo';
import week2 from './screens/week2';
import mentor from './screens/mentor';
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';


const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Todo: { screen:Todo },
  week2: {screen:week2},
  mentor:{screen:mentor},
});

const App = createAppContainer(MainNavigator);

export default App;
