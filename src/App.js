import React, { useState } from "react";
import { Main } from "./Components/Main";
//import Text from './Components/Text';
import Login from "./Login/Login";
import NewLogin from "./Login/NewLogin";
import New from "./Login/New";
//import Test from './Login/Test';
import Dashboard from "./Login/Dashboard";
import {
 BrowserRouter as Router,
 Route,
 Redirect,
 Switch,
} from "react-router-dom";
//import { AuthenticatedRoute } from "authenticated-react-router";

import "./App.css";

{
 /* <Switch>
      <Route exact path="/"/>
      {loggedIn ? <Redirect to ="/Dashboard" /> : <Login setLoggedIn={setLoggedIn}/>}
      </Switch>
     */
}

function App() {
 const [loggedIn, setLoggedIn] = useState(false);

 return (
  <div className="App">
   <Router>
    <Switch>
     <Route path="/dashboard" component={Dashboard} />
     <Route path="/" render={() =>(<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>)} />
     {/* <Redirect to="/"/> */}
     {/* {loggedIn ? <Dashboard /> : <Login setLoggedIn={setLoggedIn} />} */}
     {/* {loggedIn ? <Redirect to="/Dashboard"/> : <Login setLoggedIn={setLoggedIn}/>} */}
    </Switch>
   </Router>
  </div>
 );
}

export default App;
