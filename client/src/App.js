import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Signin from "./components/pages/Signin";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {Home}
          </Route>
          <Route path="/signin" exact>
            {Signin}
          </Route>
		  <Route path="/register">
			  {Register}
		  </Route>
        </Switch>

        {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit" className="btn btn-primary">Send Name</button> */}
      </div>
    </Router>
  );
}

export default App;
