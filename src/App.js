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
import { MyContext } from "./components/context";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import FullListOfSong from "./components/FullListOfSong";

const App = () => {
  const [data, setData] = useState({
    name: "manish",
    currentShow: null,
  });

  return (
    <div className="app">
      <MyContext.Provider value={data}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/fullList">
            <Header />
            <FullListOfSong />
          </Route>
        </Switch>
      </MyContext.Provider>
    </div>
  );
};

export default App;
