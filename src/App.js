import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";

import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllTeams from "./components/AllTeams/AllTeams";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Error from "./components/Error/Error";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "hero alom",
    phone: "01245451",
    age: 15,
    isLoggedin: false,
  });
  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <AllTeams></AllTeams>
            </Route>

            <Route exact path="/teams">
              <AllTeams></AllTeams>
            </Route>

            <Route exact path="/teamDetails/:teamId">
              <TeamDetails></TeamDetails>
            </Route>

            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
