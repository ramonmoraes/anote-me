/* global FB */
import React, { Component } from 'react';
import LogIn from './components/LogIn';


class LogInContainer extends Component {

  loginGoogle =()=> {
    console.log('loginGoogle');
  }

  loginFacebook =()=> {

    let Login = this.props.login;

    let loginPromise = new Promise(function(resolve, reject) {
      FB.login();
      FB.getLoginStatus(function(response) {
          resolve(response);
      });
    });

    loginPromise.then(function(res){
      Login({
        id:res.authResponse.userID,
        token:res.authResponse.accessToken,
      });

    });

  }
  logoutFacebook(){
    console.log('oi');
    FB.logout();
  }

  componentWillMount(){
    this.facebookSetup()
  }

  facebookSetup(){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : 1504295126295234,
        cookie     : true,
        xfbml      : true,
        version    : "v2.1"
      });
      // FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
  return (
    <LogIn loginFacebook={this.loginFacebook} loginGoogle={this.loginGoogle} />
    );
  }
}

export default LogInContainer;
