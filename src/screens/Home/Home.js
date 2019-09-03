import React from 'react';
import {Container, Content} from 'native-base';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    static navigationOptions = {
        title: 'Home'
    }

    render(){
        return(
            <Container>
                <Content>

                </Content>
            </Container>
        )
    }

}

export default Home;