import React, { Component } from 'react'
import {
    Image,
    StyleSheet
} from 'react-native'
import {Content, Text, Body, Form,  Item, Input, Label, Button, Icon  } from 'native-base'

const SignInPageDesign = (props) => {
    return (
        <Content firstback>
            <Form>
                <Item ioc-contact>
                    <Icon name='ios-contact' />
                    <Input
                        placeholder = 'Username'
                        autoCapitalize = 'none'
                        onChangeText = {props.updateUsername}
                    />
                </Item>
                <Item ioc-contact>
                    <Icon name='ios-mail' />
                    <Input
                        email = 'true'
                        placeholder = 'Email'
                        autoCapitalize = 'none'
                        onChangeText = {props.updateEmail}
                    />
                </Item>
                <Item ioc-key>
                    <Icon name='ios-key'/>
                    <Input
                        secureTextEntry={true}
                        placeholder = 'Password'
                        autoCapitalize = 'none'
                        onChangeText = {props.updatePassword}
                    />
                </Item>
                <Body>
                    <Button    signupbutton
                        onPress = { () => props.signIn()}
                    >
                        <Text> SIGNUP </Text>
                    </Button>
                </Body>
            </Form>
        </Content>
    )
}

export default SignInPageDesign

const styles = StyleSheet.create ({
    img:{
        marginTop: 50,
        marginBottom:10,
        height:90,
        width:90,
    },
})
