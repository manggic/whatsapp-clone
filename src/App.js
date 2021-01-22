// import React from 'react'
// const App = ()  => {
//    return(
//       <div className='app'>
//         <div className='app__body'>
//            {/* Sidebar */}
//            {/* chat */}

//         </div>

//       </div>
//    )
// }

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./Sidebar";
import "./App.css";
import Chat from "./Chat";
import Login from './login'
import { useStateValue } from './StateProvider'

const App = () => {
      // const [user, setUser] = useState(null);
     const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      { !user? ( <Login /> ): (
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Chat />
            </Route>
            <Route path="/room/:roomid" exact>
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
};

export default App;
