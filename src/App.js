import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import "./scss/style.scss";
import Home from "./views/Home";
import Movie from "./views/Movie";

const App = () => {
  return (
      <div className="app">
          <Router>
              <Switch>
                  <Route path="/" exact>
                      <Home/>
                  </Route>
                  <Route path="/movie" exact>
                      <Movie/>
                  </Route>
              </Switch>
          </Router>
        <h1>Jolitos App</h1>

      </div>

  );
}

export default App;
