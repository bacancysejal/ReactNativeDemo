/**
 * @providesModule Loader
 */

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import { connect } from "react-redux";
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width


class Loader extends Component {
    constructor() {
        super(...arguments);
    }



    componentWillReceiveProps({loader}) {
        if (loader == true) {
            loaderHandler.showLoader("Loading");
        } else {
            setTimeout(() => {
                loaderHandler.hideLoader();
            },1000);
        }
    }

    render() {
        const { loader } = this.props;
        return (
            <View style={ (loader) ?  styles.indicatorWithLoader : styles.indicator}>
                <BusyIndicator />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.loader ? state.loader : false
});

export default connect(mapStateToProps)(Loader);

const styles = StyleSheet.create ({
    indicatorWithLoader: {
        flex:1,
        position:'absolute',
        backgroundColor:'transparent',
        right:0,
        height:height,
        width:width,
        zIndex:999
    },
    indicator: {
        height:0,
        width:0,
    }
})