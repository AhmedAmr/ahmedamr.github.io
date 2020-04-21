import React from "react";
import "./App.css";
import "bulma";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InShortPage from "./pages/InShortPage";
import EducationPage from "./pages/EducationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div class="hero is-dark is-fullheight is-bold">
          <PageHeader />
          <Switch>
            <Route path="/in-short" component={InShortPage} exact />
            <Route path="/education" component={EducationPage} exact />
          </Switch>
          <PageFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
