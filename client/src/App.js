import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Score from "./pages/Score";
import Register from "./pages/SignUpForm";
import API from "./utils/API";

// NavBar on top => used to click between "pages"
// /game => Game 
// /login => Login
// /score => Score
// ANYWHERE ELSE => Home

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(() => {
  //   API.status()
  //     .then(res => {
  //       if (res.data.user) {
  //         setIsLoggedIn(true);
  //       }
  //     })
  //     .catch(e => {
  //       console.log('error', e)
  //     })
  // })

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {/* you can only match ONE route inside */}
          <Route exact path="/game" component={Game} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/score" component={Score} />
          <Route exact path="/signUp" component={Register} />
          {/* take home for anything else */}
          <Route component={Home} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
