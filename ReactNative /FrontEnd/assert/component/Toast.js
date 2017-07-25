/**
 * @providesModule MyToast
 */

import React, { Component } from 'react';
import Toast from 'react-native-root-toast';
import { connect } from 'react-redux';
import { notificationPop } from "ReduxActions";

class MyToast extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: false,
            message:''
        };
    }

    componentWillReceiveProps({toast, removeToast}) {
        try {
            if (toast !== this.props.toast) {
                if (toast) {
                    // Add a Toast on screen.
                    Toast.show(toast, {
                        duration: 3000,
                        position: 50,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        onHide: () => {
                            removeToast();
                        }
                    });
                    /*this._postMessage(toast);
                     setTimeout(() => {
                     removeToast();
                     },3000);*/
                } else {
                    //this._resetToast();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    _resetToast = () => {
        try {
            this.setState({
                message: '',
                visible: false
            });
            this.props.removeToast();
        } catch (error) {
            console.log(error);
        }
    }

    _postMessage = (message) => {
        try {
            this.setState({
                message: message,
                visible: true
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        //const { visible ,message } = this.state;
        return (
            <Toast />
        );
    }
}

const mapStateToProps = state => ({
    toast: state.toast ? state.toast[state.toast.length - 1] : null
});

const mapDispatchToProps = dispatch => ({
    removeToast: () => {
        dispatch(notificationPop());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyToast);
