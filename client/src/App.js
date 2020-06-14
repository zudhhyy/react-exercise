import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import store from "./store";
import { HomePage, AddPage, EditPage, DetailPage } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="navigation">
            <h3>POKEMON APP</h3>
            <div className="link">
              <Link className="btn btn btn-outline-light" to="/">
                Home
              </Link>
              <Link className="btn btn btn-outline-light" to="/add">
                Add Pokemon
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/add" component={AddPage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Route path="/edit/:id" component={EditPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
