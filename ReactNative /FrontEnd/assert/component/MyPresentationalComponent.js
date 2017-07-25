import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Linking
} from 'react-native'
import {Content, Text, Body, Form,  Item, Input, Toast, Button, Icon  } from 'native-base'

const MyPresentationalComponent = (props) => {
    return (
        <Content firstback>
            <Body>
                <Image source={require('../images/app_icon.png')}
                style={styles.img} />
                <Text firstapp>
                    First App
                </Text>
            </Body>
                <Form>
                    <Item ioc-contact>
                        <Icon name='ios-contact' />
                        <Input
                                placeholder = 'Username'
                                autoCapitalize = 'none'
                                onChangeText = {props.updateUsername}
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

                    <Text forgetpassword_text onPress={()=> props.forgetpassword() } > Forget password </Text>
                    <Body>
                        <Button    loginbutton
                                onPress = { () => props.login(props.username, props.password)}
                        >
                            <Text> LOGIN </Text>
                        </Button>
                        <Text> OR </Text>
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

export default MyPresentationalComponent

const styles = StyleSheet.create ({
    img:{
        marginTop: 50,
        marginBottom:10,
        height:90,
        width:90,
    },
})
