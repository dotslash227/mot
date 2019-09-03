import React from 'react';
import AppContainer from './routes/AppContainer';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'

console.disableYellowBox = true;

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>        
      </Provider>      
    )
  }
}