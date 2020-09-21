import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
// import Home from "./Components/Home/Home";
// import Commands from "./Components/Commands/Commands";
// import Contact from './Components/Contact/Contact'
// import Nav from "./Components/Nav/Nav";

const Nav = lazy(() => import('./Components/Nav/Nav'));
const Home = lazy(() => import('./Components/Home/Home'))
const Commands = lazy(() => import('./Components/Commands/Commands'))
const Contact = lazy(() => import('./Components/Contact/Contact'))

const renderLoader = () => <p>Loading...</p>



function App() {
  return (
    <div className="App">
      <Suspense fallback={renderLoader}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/commands" component={Commands} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
