import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {Container, Content, Button, Input, Item, Form, Label, Footer, FooterTab} from 'native-base';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            disableLogin: true
        }
    }

    static navigationOptions = {
        header: null,
    }

    handleInput(text, key){        
        newState = this.state;
        if (text==""){
            newState["disableLogin"] = true;
            newState[key]= text;
            this.setState(this.state);
            if(this.state.email == "" | this.state.password == "") this.setState({disableLogin:true});
        } 
        else{            
            newState[key] = text;        
            if (this.state.email != "" && this.state.password != "" ) newState["disableLogin"] = false;
            this.setState(newState);              
        }        
        console.log(this.state);
    }

    render(){
        return(
            <Container>
                <Content padder style={styles.loginScreen}>
                    <Image style={styles.logo} source={require("../../assets/icon.png")} />
                    <Form>
                        <Item stackedLabel>
                            <Label>Email Address</Label>
                            <Input autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "email")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input secureTextEntry autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "password")} />
                        </Item>
                        <Button disabled={this.state.disableLogin} style={styles.loginButton}>
                            <Text style={{color:"white"}}>Login</Text>
                        </Button>
                    </Form>
                    <View style={styles.infoText}>
                        <Text>We are Delhi's only digital tablers, enabling business growth and charities 
                        online through tablers all over India.</Text>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full success onPress={()=>this.props.navigation.navigate("Signup")}>
                            <Text style={{color:"white"}}>Become a Member</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    buttonText:{
        color: "white",
    },
    infoText:{
        marginTop: 20,
        paddingLeft: 10,
    },
    logo:{
        width: 300,        
        height: 300,
        justifyContent: "center",
        alignSelf: "center"
    },
    loginButton:{
        justifyContent: "center",
        alignSelf: "center",
        width: "80%",
        marginTop: 20
    },
    loginScreen:{
        paddingTop: "10%"
    }
})

export default Login;