/**
 * @providesModule MainContainer
 */

import React, { Component, AsyncStorage } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import withToast from 'WithToast';
import MyToast from 'MyToast';
import withLoader from 'WithLoader';
import Loader from 'Loader';

class MainContainer extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <View>
                <Loader/>
                <MyToast />
            </View>
        );
    }
}

export default withToast(withLoader(MainContainer));
