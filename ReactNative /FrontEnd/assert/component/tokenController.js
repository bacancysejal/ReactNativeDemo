import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import { Drawer, Text, Content,Container } from 'native-base';
import { Actions } from 'react-native-router-flux';

class TokenController extends Component {

    async  componentWillMount(){
        try {
            const value = await AsyncStorage.getItem('user_token');
            if (value !== null){
                // We have data!!
                console.warn(value);
                Actions.second(title="Second");
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render(){
        return (
            <Content>
                </Content >
    )
    }
}

export default TokenController;

