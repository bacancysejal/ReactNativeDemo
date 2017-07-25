import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'native-base';
export default class Icons extends Component {
    constructor(props){
        super(props);
        this.state = {
            icon_name: '',
            icon_action : '',
        }
    }

    componentWillMount(){
        if(this.props.titlename == 'Login'){
            this.setState({
                icon_name: 'ios-home',
                icon_action : this._back.bind(this)
            })
        }
        else if (this.props.titlename == 'SignUp' || this.props.title == 'ForgetPassword'){
            this.setState({
                icon_name: 'ios-arrow-back',
                icon_action : this._back.bind(this)
            })
        }
        else{

        }
    }

    _back(){
        Actions.home();
    }

    render() {
        const {icon_name, icon_action} = this.state;
        return (
            <Button transparent >
                <Icon name={icon_name} headerioc onPress={icon_action}/>
            </Button>
        );
    }
}

