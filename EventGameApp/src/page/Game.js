import React, { useState, useEffect } from "react";

import Counter from "../components/Counter";
import TopHeader from "../components/TopHeader";

const Game = () => {
  return (
    <div>
      <TopHeader />

      {/* D_pink */}
      <div className="app">
        <img src="/img/logo192.svg" className="App-S_logo" alt="logo" />
      </div>

      {/* 스코어버튼 */}
      <Counter />
    </div>
  );
};

export default Game;
