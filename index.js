import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Shops from "./Shops";
import AboutUs from "./AboutUs";
import Feedback from "./Feedback";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav class="navbar navbar-expand-sm bg-light">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    OnileShopping
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Shops">
                    Shops
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/AboutUs">
                    AboutUs
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Feedback">
                    Feedback
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/Shops">
                <Shops />
              </Route>
              <Route path="/AboutUs">
                <AboutUs />
              </Route>
              <Route path="/Feedback">
                <Feedback />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
