import React, { Component } from 'react';
import { Content, Card, CardItem, Text, Body, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class SecondPage extends Component {

    constructor(props) {
        super(props);

    }

    homeFun = () => {
            Actions.home();
        }

        render(){
            return (
                <Content>
                <Card>
                <CardItem>
                <Body>
                <Text> Your text here </Text>
            </Body>
            </CardItem>
            </Card>
            <Button onPress = {this.homeFun}>
        <Text>GO to Home</Text>
            </Button>
            </Content>
            )
        }
}
export default SecondPage;

/*

*/