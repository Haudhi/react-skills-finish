import React from "react";
import "./App.css";
import Mainpage from "./Mainpage";
import Login from "./component/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
