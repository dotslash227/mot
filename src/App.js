import React from 'react';
import AppContainer from './routes/AppContainer';

console.disableYellowBox = true;

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <AppContainer />
    )
  }
}