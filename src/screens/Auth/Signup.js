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
            value: ''
        }
    }

    static navigationOptions = {
        title: "Become a Member"
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
    }

    removeTag = (key) =>{        
        tags = this.state.tags;
        (key == 0 ) && console.log("0 key");
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
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Password</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>
                                Confirm Password -
                                {(!this.state.passwordMatch)?<Text> Passwords do not match</Text>:<Text> Passwords Match</Text>}
                            </Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Business Name</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Business Address</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Enter Business Description</Label>
                            <Input />
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
                        <Button>
                            <Text>Submit Details</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

}

const styles = StyleSheet.create({
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