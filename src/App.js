import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profiles from "./Components/Profiles.js";
import Nav from "./Components/Nav.js";
import DogContent from "./Components/DogContent.js";
import Error from "./Components/Error.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Profiles} />
          <Route exact path="/dogs/:id" component={DogContent} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
