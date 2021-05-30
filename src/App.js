import React from "react";
import SignUp from "./Components/SignUp/Signup.container";
import Login from "./Components/Login/Login.container";
import Meals from './Components/Meals/Meals.component';
import { Router, Switch, Route } from "react-router-dom";
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
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
