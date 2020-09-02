import React from "react";
import "./App.css";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Commands from "./Components/Commands/Commands";
import Contact from './Components/Contact/Contact'

import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/commands" component={Commands} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
