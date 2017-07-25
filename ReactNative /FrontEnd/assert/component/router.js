import React , {Component} from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import HeaderComponent from './header.js'
import FirstPage from './firstPage'
import SecondPage from './contentpage'
import SignInPage from './signinPage'
import ForgetPasswordPage from './forgetpassword'
import MyProfileComponent from './myProfileComponent'

export default class Routes extends Component{

     _headerComponent(Component, title){
        return (<HeaderComponent title={title} component={<Component/>} />);
    }

    render(){
        return(
            <Router>
                <Scene key = "root" hideNavBar>
                    <Scene key = "home" component = { ()=> this._headerComponent(FirstPage, 'Login')} title = "Home" initial = {true}/>
                    <Scene key = "second" component = { ()=> this._headerComponent(SecondPage, 'Second') } title = "Second"  />
                    <Scene key = "signup" component = {()=> this._headerComponent(SignInPage, 'SignUp')} title = "Signup"  />
                    <Scene key = "forgetpasswordroot" component = {()=> this._headerComponent(ForgetPasswordPage, 'ForgetPassword')} title = "forgetpasswordroot"  />
                    <Scene key = "myProfile" component = {()=> this._headerComponent(MyProfileComponent, 'Profile')} title = "myProfile"  />
                </Scene>
            </Router>
        )
    }
}