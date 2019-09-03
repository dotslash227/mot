import React from 'react';
import {Container, Content, Spinner} from 'native-base';
import {StyleSheet} from 'react-native';

class SpinnerScreen extends React.Component{
    render(){
        return(
            <Container>
                <Content>
                    <Spinner style={styles.spinner} />
                </Content>
            </Container>            
        )
    }
}

const styles = StyleSheet.create({
    spinner:{
        color: "red",
        marginTop: "35%"
    }
})

export default SpinnerScreen;