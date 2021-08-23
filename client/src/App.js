import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Signin from "./components/pages/Signin";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route  path="/" exact component={Home}/>
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/register">{Register}</Route>
          </Switch>

          {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit" className="btn btn-primary">Send Name</button> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
