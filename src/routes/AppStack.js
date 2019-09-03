import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home/Home';

const AppStack = createStackNavigator({
    Home: Home
}, {
    initialRouteName: "Home"
})

export default AppStack;