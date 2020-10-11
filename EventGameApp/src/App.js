import React from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";

import Main from "./page/Main";
import Board from "./page/Board";
import End from "./page/entry/End";
import List from "./page/entry/List";

import Form from "./page/Form";

function App() {
  return (
    <div>
      
      <div className="App">
        <header className="App-header">




          {/* 페이지 이동 */}
          {/* <div style={{ textAlign: "left" }}>
            <br></br>
            <Link to="/">Main</Link>
            <br></br>
            <Link to="/entry/input">Input</Link>
            <br></br>
            <a
              className="App-link"
              href="https://github.com/terryjin911"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go Chill
            </a>
          </div> */}



          <Route path="/" component={Main} exact={true} />
          <Route path="/ingame" component={Board} />
          <Route path="/entry/input/" component={End} />
          <Route path="/entry/List" component={List} />
          <Route path="/Form" component={Form} />
        </header>

        {/* <Button /> */}
      </div>
    </div>
  );
}

export default App;
