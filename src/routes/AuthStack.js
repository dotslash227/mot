import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

export default AuthStack = createStackNavigator({
    Login: Login,
    Signup: Signup
}, {
    initialRouteName: "Login"    
})