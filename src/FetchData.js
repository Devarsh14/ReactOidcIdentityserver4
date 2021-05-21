import React from "react";
import { useState, useEffect } from "react";
import { UserManager, WebStorageStateStore } from 'oidc-client';
import { useHistory } from 'react-router-dom'

const config = {
  authority: "https://demo.identityserver.io",
  client_id: "interactive.public",
  redirect_uri: "https://localhost:3000/signin-oidc",
  response_type: "code",
  scope:"openid profile email api offline_access",
  post_logout_redirect_uri : "https://localhost:3000/index.html",
};

// const config = {
//   authority: "https://localhost:5001",
//   client_id: "ReactIdentityServerLearn",
//   redirect_uri: "https://localhost:3000/authentication/login-callback",
//   response_type: "id_token token",
//   scope:"openid profile email api offline_access",
//   post_logout_redirect_uri : "https://localhost:3000/index.html",
// };

const FetchData = () => {
  // 1. call user manager 
  // const redirect = () =>{
  //   // const a =  UserManager.signinRedirect("https://localhost:5001");
  //   try {
  //        UserManager.signinRedirect();
  //       return this.redirect();
  //   } catch (redirectError) {
  //       console.log("Redirect authentication error: ", redirectError);
  //       return this.error(redirectError);
  //   }
  // }
 const  getAccessToken = () =>{
    //  this.ensureUserManagerInitialized();
    const user =  this.userManager.getUser();
    return user && user.access_token;
}
   console.log('AcessToken' + getAccessToken)

      const userManager = new UserManager(config);
      console.log(config);
      userManager.signinRedirect();

  const populateWeatherData = async () => {
    
    const userManager = new UserManager(config);
    console.log(config);
    userManager.signinRedirect();
    
    // const token = "a2fdifdsfdsfjjjkljlf;"; //await authService.getAccessToken();

    // const response = await fetch("https://demo.identityserver.io/api/test", {
    //   method:'GET',
    //     headers: !token ? {} : { Authorization: `Bearer ${token}` },
    // });
    // console.log(response);
  };
  const history = useHistory()
  useEffect(() => {
      //redirect();
    populateWeatherData();
  }, [history]);
  return <div></div>;
};

export default FetchData;

//https://localhost:3000/