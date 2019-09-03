import React from 'react';
import AppContainer from './routes/AppContainer';
import {Provider} from 'react-redux';
import store from './store';

console.disableYellowBox = true;

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>      
    )
  }
}