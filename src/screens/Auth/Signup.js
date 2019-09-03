import React from 'react';
import {Container, Content, Form, Input, Label, Item, Button, Footer,FooterTab, Grid, Row, Col} from 'native-base';
import {View, Text, StyleSheet, TouchableOpacity} from  'react-native';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            name:'',
            email: '',
            password: '',
            phone: '',
            passwordMatch: false,
            businessName: '',
            tags:[],
            businessAddress: '',
            businessDescription: '',
            value: '',
            disableSubmit: true           
        }
    }

    static navigationOptions = {
        title: "Become a Member"
    }

    checkForEnable(){
        const {name, email, phone, businessName, tags, businessAddress, passwordMatch} = this.state;
        if (name && email && phone && businessName && tags.length && businessAddress && passwordMatch) this.setState({disableSubmit:false});
        console.log(this.state);
    }

    handleInput(text,field){
        newState = this.state;        
        switch(field){
            case "recheckPassword":{                
                if(this.state.password == text) this.setState({passwordMatch:true});                
                break;
            }
            default:{                
                newState[field] = text;
                this.setState({newState});                
                this.checkForEnable();
                break;
            }
        }
    }    

    addCategoryTags = (text) =>{        
        tags = this.state.tags;
        this.setState({value:text});
        if (text.includes(",")){
            text = text.split(",");
            tags.push(text[0]);
            if (tags.length > 3){
                tags.pop();
                alert("You cannot enter more than 3 tags");                
            }
            this.setState({tags, value:'' });
        }                
        this.checkForEnable();
    }

    removeTag = (key) =>{        
        tags = this.state.tags;        
        (key == 0) ? tags.shift() : tags.splice(key,key);        
        this.setState({tags});        
    }

    render(){
        return(
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Enter Your Name</Label>
                            <Input autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "name")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter email address</Label>
                            <Input autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "email")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Password</Label>
                            <Input secureTextEntry autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "password")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>
                                Confirm Password -
                                {(this.state.passwordMatch)?<Text> Passwords Match</Text>:<Text> Passwords do not match</Text>}
                            </Label>
                            <Input secureTextEntry autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "recheckPassword")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Mobile Number</Label>
                            <Input secureTextEntry autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "phone")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Business Name</Label>
                            <Input autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "businessName")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Business Address</Label>
                            <Input autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "businessAddress")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Business Description</Label>
                            <Input autoCorrect={false} autoCapitalize="none" onChangeText={(text)=>this.handleInput(text, "businessDescription")} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter upto 3 tags for your Business</Label>
                            <Input autoCorrect={false} autoCapitalize="none" value={this.state.value} onChangeText={(text)=>this.addCategoryTags(text)} />
                        </Item>
                    </Form>   
                    <View style={{marginTop:15, marginLeft: 10}}>
                        <Grid>                                                           
                            {
                            this.state.tags.map((item,key)=>{
                                return(
                                    <TouchableOpacity key={key} onPress={()=>{this.removeTag(key)}}>
                                        <Col>                                                                       
                                            <Text style={styles.tagButton}>{item}    X</Text>
                                        </Col>
                                    </TouchableOpacity>  
                                )
                            })
                        }                            
                        </Grid>    
                    </View>                    
                </Content>
                <Footer>
                    <FooterTab>
                        <Button style={(!this.state.disableSubmit) && styles.submitButton} full disabled={this.state.disableSubmit}>
                            <Text style={{color:"white"}}>Submit Details</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    submitButton:{
        backgroundColor: "green",
        marginTop: 20,
    },
    tagButton:{
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        color: "white",
        maxWidth: 150,
        padding: 10,
        fontSize: 14,
        borderRadius: 10,
        borderColor: "white",
        marginRight: 10
    }
})

export default Signup;