import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Content, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base';
export default class SideBarComponent extends Component {

    constructor() {
        super();
        this.state = {
            data : ''
        }
    }
    async  componentWillMount(){
        try {
            const value = await AsyncStorage.getItem('user_token');
            if (value !== null) {
                // We have data!!
                this.setState({
                    data : JSON.parse(value).userData.user_name
                })
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    async logout (){
        try {
            await AsyncStorage.removeItem('user_token');
            const valuelogout = await AsyncStorage.getItem('user_token');
            if (valuelogout == null){
                // We have data!!
                Actions.home(title="Second");
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    myProfile(){
        Actions.myProfile();
    }

    render() {
        return (

            <Content sidebarstyle>
                <Content sidebarstylefirst>
                    <Body>
                        <Image source={require('../images/app_icon.png')}
                        style={styles.img} />
                        <Text sidebarText>
                            {this.state.data}
                        </Text>
                    </Body>
                </Content>
                <ListItem icon>
                    <Left>
                        <Icon name="ios-person" />
                    </Left>
                    <Body>
                        <Text onPress={this.myProfile}>My Profile</Text>
                    </Body>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="ios-log-out" />
                    </Left>
                    <Body>
                        <Text onPress={this.logout}>LOG OUT</Text>
                    </Body>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </Content>

    );
    }
}

const styles = StyleSheet.create ({
    img:{
        marginTop: 50,
        marginBottom:10,
        height:90,
        width:90,
    },
})
