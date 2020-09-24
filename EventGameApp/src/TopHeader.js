import React from "react";

import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div>
      {/* <div className="App">
            <header className="App-header"> */}

      {/* 페이지 이동 */}
      <div style={{ textAlign: "left" }}>
        <br></br>
        <Link to="/">Main</Link>
        <br></br>
        <Link to="/input">Input</Link>
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
    </div>
  );
};

export default TopHeader;
