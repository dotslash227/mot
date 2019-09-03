import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthStack from './AuthStack';

const AppNavigator = createSwitchNavigator({
    AuthStack: AuthStack
},{
    initialRouteName: "AuthStack"
})

export default AppContainer = createAppContainer(AppNavigator);