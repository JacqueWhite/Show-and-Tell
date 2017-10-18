import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect, Route } from 'react-router-dom';

import Portfolio from "./pages/portfolio";
import Main from "./pages/main";
import Edit from "./pages/edit";
import Login from "./pages/login";
import Wrapper from "./components/Wrapper";

// Auth stuff
import Auth from './components/Auth/Auth';
import Callback from './components/Callback/Callback';
import Profile from './components/Profile/Profile';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () =>
  <Router>
    <div>
      <Wrapper>
  	      <Switch>
  	        <Route exact path="/portfolio" component={Portfolio} />

            <Route path="/profile" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/home"/>
              ) : (
                <Profile auth={auth} {...props} />
              )
            )} />

            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
            <Route path="/" render={(props) => <Main auth={auth} {...props} />} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
      </Wrapper>
    </div>
  </Router>;

export default App;
