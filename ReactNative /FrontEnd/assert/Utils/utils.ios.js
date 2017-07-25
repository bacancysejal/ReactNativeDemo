/**
 * @providesModule AppUtils
 */

import React, { Component } from 'react'
import {
    AsyncStorage
} from 'react-native'
import { Actions } from 'react-native-router-flux';

const customLocalStorage = async(data) => {
    try {
        await AsyncStorage.setItem('user_token', JSON.stringify({userData: data }));
    }
    catch (error) {
        // Error saving data
        console.warn("error ===>", error);
    }
}

const AppUtils = {

    login : function(data) {
        return fetch('http://192.168.1.76:8080/user/login', {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'username': data.username,
                'password': data.password
            })
        }).then((response) => response.json())
            .then((responseJson) =>{
                if(responseJson.status){
                    customLocalStorage(responseJson.data);
                    Actions.second(title="Second");
                    return responseJson.data;
                }
                else{
                    //alert("not valid");
                    console.log("not valid")
                }
            })
            .catch((error) => {
                console.error(error);
            })
    },

    signin : function(data) {
        console.log("login", data);
        return fetch('http://192.168.1.76:8080/user/signup', {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'username': data.username,
                'email':data.email,
                'password': data.password
            })
        }).then((response) => response.json())
            .then((responseJson) =>{
                if(responseJson.status){
                    Actions.home(title="LOGIN");
                }
                else{
                    console.warn("data not insert");
                }
            })
            .catch((error) => {
                console.error(error);
            })
    },

    forgetpassword : async function(data) {
        return fetch('http://192.168.1.76:8080/user/forgetpassword', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': data.username,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    return responseJson.data ;
                    Actions.home(title = "LOGIN");
                }
                else {
                    //alert("not valid");
                    console.warn("not valid")
                }
            }).catch((error) => {
                console.error(error);
            })
    },

    uploadImage : async function(data) {
        return fetch('http://192.168.1.76:async/user/upload', {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'multipart/from-Data',
                'Authorization': data.token
            },
            body:body
        }).then((response) => response.json())
            .then((responseJson) =>{
                if(responseJson.status){
                    return responseJson.data;
                }
                else{
                    //alert("not valid");
                    console.log("not valid")
                }
            })
            .catch((error) => {
                console.error(error);
            })
    },

    uploadData : async function(data) {
        return fetch('http://192.168.1.76:8080/user/upload/updateUserData', {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': data.token
            },
            body:JSON.stringify({
                'username': data.username,
                'useremail': data.email,
                'password': data.password
            })
        }).then( (response) => response.json())
            .then( (responseJson) =>{
                if(responseJson.status){
                    try {
                        AsyncStorage.setItem('user_token', JSON.stringify({userData: responseJson.data }));
                        Actions.second();
                    }
                    catch (error) {
                        console.warn(error);
                    }
                }
                else{
                    //alert("not valid");
                    console.log("not valid")
                }
            })
            .catch((error) => {
                console.error(error);
            })
    },

}

module.exports = AppUtils;
