import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import '../App.css';

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function Navbar() {
  return (
    <Router>
      <div>
        <ul>
          <li className="Navbar">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>

							
								<Route path="/about"><About /></Route>
								<Route path="/contact"><Contact /></Route>
								<Route path="/" exact={true}><Home /></Route>

      </div>
    </Router>
  );
}