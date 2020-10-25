import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Switch, Route } from "react-router-dom";
import { Home, Detail, Favorite } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:movieId">
          <Detail />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
