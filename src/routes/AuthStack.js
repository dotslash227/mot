import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/Login';

export default AuthStack = createStackNavigator({
    Login: Login
}, {
    initialRouteName: "Login"    
})