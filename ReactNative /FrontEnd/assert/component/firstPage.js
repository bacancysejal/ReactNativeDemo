import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import API from 'AppUtils';
import MyPresentationalComponent from './MyPresentationalComponent'
import { Actions } from 'react-native-router-flux';
import withLoader from 'WithLoader';

class FirstPage extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            userData: null,
            username: '',
            password: ''
        }
        that = this;
    }

    async  componentWillMount(){
        try {
            const value = await AsyncStorage.getItem('user_token');
            if (value !== null){
                // We have data!!
                Actions.second();
            }
        } catch (error) {
            // Error retrieving data
        }
    }


    updateUsername = (text) => {
        this.setState({username: text})
    }
    updatePassword = (text) => {
        this.setState({password: text})
    }



    login = () => {
        const { loader } = that.props;
        loader(true);
        API.login({username : this.state.username, password : this.state.password})
            .then((responseJson) => {
                loader(false);
                const data = responseJson;
                if (data) {
                    this.setState({
                        userData:data.userData
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

    signIn = () => {
        Actions.signup();
    }

    forgetpassword = () => {
        Actions.forgetpasswordroot();
    }

    render(){
        return (
            <MyPresentationalComponent
                updateUsername = {this.updateUsername}
                updatePassword = {this.updatePassword}
                login = {this.login}
                signIn = {this.signIn}
                forgetpassword = {this.forgetpassword}
                userid = {this.state.data}
            />
        )
    }
}
export default withLoader(FirstPage);

