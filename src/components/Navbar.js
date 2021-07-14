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


export default function Navbar() {
	
	const props_a = {firstName:"Shem", lastName:"Star", Age:20}
	const props_b = {Salary:2400, City:"Unnao"}

	let array_a = ["first","second","third"];
	let array_b = ["fourth", "fifth", "sixsth"];
	let merge_array = [...array_a,...array_b];
	
	console.warn(merge_array);

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

							
								<Route path="/about"><About {...merge_array } {...props_a} {...props_b} /></Route>
								<Route path="/contact"><Contact /></Route>
								<Route path="/" exact={true}><Home /></Route>

      </div>
    </Router>
  );
}