import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import { UserManager } from 'oidc-client';
import FetchData from './FetchData';
import SigninOidc from './signin-oidc';

function log() {
  document.getElementById('results').innerText = '';

  Array.prototype.forEach.call(arguments, function (msg) {
      if (msg instanceof Error) {
          msg = "Error: " + msg.message;
      }
      else if (typeof msg !== 'string') {
          msg = JSON.stringify(msg, null, 2);
      }
      document.getElementById('results').innerHTML += msg + '\r\n';
  });
}


function App() {
  return (


    <Router>
    <Switch>
    {/* <Route path="/signout-oidc" component={SignoutOidc} /> */}
      <Route path="/login" component={FetchData} />
      <Route path="/signin-oidc" component={SigninOidc} />
      
    </Switch>
    <div>This is hi from home page</div>
    <div> This is redirect test 2</div>
  </Router>

       
  
  );
}

export default App;

// https://medium.com/@franciscopa91/how-to-implement-oidc-authentication-with-react-context-api-and-react-router-205e13f2d49
// https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
//https://dev.to/tappyy/oidc-authentication-with-react-identity-server-4-3h0d
//https://github.com/IdentityModel/oidc-client-js/wiki
//https://openid.net/specs/openid-connect-core-1_0.html
//https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example

//($env:HTTPS = "true") -and (npm start)