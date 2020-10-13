import React from "react";

import TopHeader from "../components/TopHeader";

//게임설명과 startButton이 있는 화면
const Main = () => {

  const onStart = () => {
    window.location = "/ingame";
    console.log("게임시작!");
  }
    
  return (
    <div>


      <TopHeader/>

      {/* D_pink */}
      <div className="app">
        <img src="/img/logo192.svg" className="App-logo" alt="logo" />
      </div>



      {/* START버튼 */}
      <button onClick={() => onStart()}>START</button>



      {/* 게임설명 */}
      <h3>
        <p>
          start 버튼을 눌러서 게임시작!<br></br>
          <br></br>
          5초 안에 도넛을 없애서<br></br>
          SCORE를 올려보세요!
        </p>
      </h3>



    </div>
  );
};

export default Main;
