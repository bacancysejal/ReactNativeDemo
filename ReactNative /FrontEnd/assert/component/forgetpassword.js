import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Linking
} from 'react-native'
import { Content,  Form,  Item, Input, Icon, Body,Button, Text  } from 'native-base';
import withLoader from 'WithLoader';
import withToast from 'WithToast';
import API from 'AppUtils';

class ForgetPasswordPage extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            username: ''
        }
    }

    updatePassword = (text) => {
        this.setState({
            username : text
        })
    }

    sendpassword = () => {
        const { loader, toast } = this.props;
        loader(true);
        API.forgetpassword({username : this.state.username})
            .then((responseJson) => {
                loader(false);
                toast("Password : "+responseJson);
            })
            .catch((error) => {
                console.error("hdsfgh",error);
            })
    }

    render(){
        return (
            <Content firstback>
        <Form>
        <Item ioc-key>
        <Icon name='ios-mail'/>
        <Input
        placeholder = 'username'
        autoCapitalize = 'none'
        onChangeText = {this.updatePassword}
        />
        </Item>
        </Form>
            <Body>
            <Button loginbutton onPress = { () => this.sendpassword()}>
            <Text>
                Send Password
            </Text>
            </Button>
            </Body>
        </Content>
    )
    }
}

export default withToast(withLoader(ForgetPasswordPage));

const styles = StyleSheet.create ({
    img:{
        marginTop: 50,
        marginBottom:10,
        height:90,
        width:90,
    },
})
