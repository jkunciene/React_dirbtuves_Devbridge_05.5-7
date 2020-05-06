import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
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

      </div>

  );
}

export default App;
