import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './src/pages/Login';
import OrgScreen from './src/pages/OrgScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  Org: {screen: OrgScreen},
});

const App = createAppContainer(MainNavigator);

export default App;