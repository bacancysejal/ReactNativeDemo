import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native';
import {Drawer, Header,Content, Text, Button, Left, Right, Body, Icon } from 'native-base';
import SideBar from './sideBarComponent';
import Icons from './iconComponent';

class  HeaderComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : ''
        }
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render(){
        const { component, title } = this.props;
        return ( <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >

        <Header headerfirst>
        <Left>
        {
        (this.props.title == 'Login' || this.props.title == 'SignUp' || this.props.title == 'ForgetPassword')?
            <Icons titlename = {title}/>
                :
            <Button transparent >
                <Icon name='ios-menu' headerioc onPress={() => this.openDrawer()}/>
            </Button>
        }
        </Left>
        <Body>
        <Button  transparent>
        <Text headerText>
        {this.props.title}
        </Text>
        </Button>
        </Body>
        <Right>
        <Icon name='ios-search' headerioc />
        </Right>
        </Header>
            {component}
        </Drawer>
        );
    }

}
export default HeaderComponent
