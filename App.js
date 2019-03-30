import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './src/pages/Login';
import OrgScreen from './src/pages/OrgScreen'
import DiaScreen from './src/pages/DiaScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  Org: {screen: OrgScreen},
  Diagnose: {screen: DiaScreen}
});

const App = createAppContainer(MainNavigator);

export default App;