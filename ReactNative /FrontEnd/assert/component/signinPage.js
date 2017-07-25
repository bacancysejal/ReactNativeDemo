import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import {Container } from 'native-base'
import HeaderComponent from './header.js'
import API from 'AppUtils';
import SignInPageDesign from './signInPageDesign'
import { Actions } from 'react-native-router-flux';
import withLoader from 'WithLoader';

class SignInPage extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            data: '',
            username: '',
            email:'',
            password: ''
        }
    }

    updateUsername = (text) => {
        this.setState({username: text})
    }
    updateEmail = (text) => {
        this.setState({email: text})
    }
    updatePassword = (text) => {
        this.setState({password: text})
    }

    signin = () => {
        const { loader } = that.props;
        loader(true);

        API.signin({username : this.state.username, email:this.state.email, password : this.state.password})
            .then((responseJson) => {
                loader(false);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render(){
        return (
            <SignInPageDesign
        updateUsername = {this.updateUsername}
        updateEmail = {this.updateEmail}
        updatePassword = {this.updatePassword}
        signIn = {this.signin}
    />
    )

    }

}

export default withLoader(SignInPage);

