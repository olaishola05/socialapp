import React from "react";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/pages/profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
