import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import homePage from "./Homepage/landingpage";
import errorPage from "./ErrorPage";
import searchPage from "./SearchPage/landing";
require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={homePage} />
        <Route path="/search/:query" component={searchPage} />
        <Route component={errorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
