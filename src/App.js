import React from "react";
import SignUp from "./Components/SignUp/Signup.container";
import Login from "./Components/Login/Login.container";
import Meals from './Components/Meals/Meals.container';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory as history } from 'history';
function App() {
  return (
    <React.Fragment>
      <Router history={history()}>
        <Switch>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/meals"><Meals /></Route>
          <Route path="/"><Redirect from="*" to={window.localStorage.getItem('token') ? '/meals' : '/login'}></Redirect></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
