import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Signin from "./components/pages/Signin";

function App() {

  // async function signIn(e) {
  //   e.preventDefault();
  //   try {
  //     await axios.get("http://localhost:4000/signin", {
  //       data,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}>
            
          </Route>
          <Route path="/signin" exact component={Signin}>
            
          </Route>
          <Route path="/register">{Register}</Route>
        </Switch>

        {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit" className="btn btn-primary">Send Name</button> */}
      </div>
    </Router>
  );
}

export default App;
