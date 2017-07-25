import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    AsyncStorage,
    NativeModules
} from 'react-native'
import imagePicker  from 'react-native-imagepicker';
import API from 'AppUtils';
import { Actions } from 'react-native-router-flux';
import {Content, Text, Body, Form,  Item, Input, Label, Button, Icon  } from 'native-base';
import withLoader from 'WithLoader';

let that;
class MyProfileComponent extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            avImage :(<Image source={require('../images/user.png')} style={styles.img} />),
            name : '',
            email : '',
            password : '',
            token : ''
        }
        that = this;

    }

    async  componentWillMount(){
        try {
            const value = await AsyncStorage.getItem('user_token');
            if (value !== null) {
                let data = JSON.parse(value).userData
                let source = {uri:('http://localhost:8080/images/'+JSON.parse(value).userData.user_profile) , type: 'image/jpeg', name: 'image.jpg', isStatic: true};
                that.setState({
                    name : data.user_name,
                    email: data.user_email,
                    password: data.user_password,
                    token : data.user_token,
                    avImage :(<Image source={source}
                                     style={styles.img} />),
                })
            }
        } catch (error) {
            console.warn("error.........",error)
        }
    }

    imagepickers() {
        imagePicker.open({
            takePhoto: true,
            chooseFromLibrary: true
        }).then(function(imageUri) {
            let source = {uri: imageUri, type: 'image/jpg', name: 'image.jpg', isStatic: true};
            that.setState({
                avImage: (
                    <Image source={source} style={styles.img} />
                )
            });
            // uri is link to asset-library://
            NativeModules.RNImageToBase64.getBase64String(imageUri, (err, base64) => {
                if(err) throw err;
                //console.log("base 64",base64);
                that.upload(base64);
            })
        }, function() {
            console.warn('user cancel');
        });

    }

    upload = async (image) => {
            let body = new FormData();
            body.append('avatar', image);
            return await API.uploadImage({token : this.state.token})
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

    customLocalStorage = async(updatedData) => {
        try {
            await AsyncStorage.setItem('user_token', JSON.stringify({userData: updatedData }));
            const value = await AsyncStorage.getItem('user_token');
            if (value !== null) {
                let source = {uri:('http://localhost:8080/images/'+JSON.parse(value).userData.user_profile) , type: 'image/jpeg', name: 'image.jpg', isStatic: true};
                that.setState({
                    avImage :(<Image source={source}
                                     style={styles.img} />),
                })
            }
        }
        catch (error) {
            // Error saving data
            console.warn("error ===>", error);
        }
    }

    updateUsername = (text) => {
        that.setState({name: text})
    }
    updateEmail = (text) => {
        that.setState({email: text})
    }
    updatePassword = (text) => {
        that.setState({password: text})
    }
    updateData = async() => {
        const { loader } = that.props;
        loader(true);
        return await API.uploadData({username : this.state.name, password : this.state.password, email : this.state.email, token : this.state.token})
            .then((responseJson) => {
                loader(false);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render(){

           return (
               <Content firstback>
           <Body >
                {this.state.avImage}
                <Icon name="ios-camera" onPress={this.imagepickers } photosDisplay transparent/>
           <Form>
           <Item ioc-contact>
           <Icon name='ios-contact' />
               <Input
           placeholder = {this.state.name}
           autoCapitalize = 'none'
           onChangeText = {this.updateUsername}
               />
               </Item>
               <Item ioc-contact>
           <Icon name='ios-mail' />
               <Input
           email = 'true'
           placeholder = {this.state.email}
           autoCapitalize = 'none'
           onChangeText = {this.updateEmail}
               />
               </Item>
               <Item ioc-key>
           <Icon name='ios-key'/>
               <Input
           secureTextEntry={true}
           placeholder = {this.state.password}
           autoCapitalize = 'none'
           onChangeText = {this.updatePassword}
               />
               </Item>
               <Body>
               <Button    signupbutton onPress={this.updateData}>
           <Text> Upload</Text>
           </Button>
           </Body>
           </Form>
           </Body>
           </Content>
       )
       }

}

export default  withLoader(MyProfileComponent);

const styles = StyleSheet.create ({
    img:{
        marginTop: 20,
        marginBottom:20,
        borderRadius: 40,
        height:90,
        width:90,
    },
})
