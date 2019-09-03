import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNavigator = createSwitchNavigator({
    AuthStack: AuthStack,
    AppStack: AppStack
},{
    initialRouteName: "AuthStack"
})

export default AppContainer = createAppContainer(AppNavigator);