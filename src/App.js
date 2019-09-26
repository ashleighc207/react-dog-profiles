import React from "react";
import { Route, Switch } from "react-router-dom";
import Profiles from "./Components/Profiles.js";
import Nav from "./Components/Nav.js";
import Dog from "./Components/Dog.js";
import Error from "./Components/Error.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact to="/" component={Profiles} />
        <Route exact to="/dogs/:id" component={Dog} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
