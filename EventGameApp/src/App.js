import React from "react";
import { Route, Link } from "react-router-dom";

import logo from "./logo192.png";
import "./App.css";

import Main from "./page/Main";
import Board from "./page/Board";
import End from "./page/entry/End";
import List from "./page/entry/List";

import GNB from "./GNB"

function App() {
  return (
    <div>
      {/* <TopHeader /> */}
      
      <div className="App">
        <header className="App-header">




          {/* <GNB /> */}
          {/* 페이지 이동 */}
          <div style={{ textAlign: "left" }}>
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
          </div>





          {/* Doughnut */}
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          {/* <h4>
            <p>
              도넛 OR start 버튼을 눌러서 게임시작!<br></br>
              <br></br>
              10초 안에 도넛을 없애서<br></br>
              SCORE를 올려보세요!
            </p>
          </h4> */}




          <Route path="/" component={Main} exact={true} />
          <Route path="/ingame" component={Board} />
          <Route path="/entry/input/" component={End} />
          <Route path="/entry/List" component={List} />
        </header>

        {/* <Button /> */}
      </div>
    </div>
  );
}

export default App;
