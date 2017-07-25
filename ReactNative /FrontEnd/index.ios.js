/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux';
import store from 'ReduxStore';
import { StyleProvider, Container} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Routes from './assert/component/router';
import MainContainer from 'MainContainer';


export default class iosFirstDemo extends Component {
  render() {
    return (
        <Provider store={store}>
            <StyleProvider style={getTheme(material)} >
                <Container>
                    <MainContainer />
                    <Routes />
                </Container>
            </StyleProvider>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('iosFirstDemo', () => iosFirstDemo);
