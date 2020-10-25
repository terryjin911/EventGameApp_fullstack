import React from "react";
import { useHistory } from "react-router-dom";

import TopHeader from "../components/TopHeader";

//게임설명과 startButton이 있는 화면
const Main = () => {
  let history = useHistory();

  const onStart = () => {
    //history쓰니까 새로고침 안 일어나고 스무스하게 넘어가서 좋다!!
    // window.location = "/Game";
    history.push("/game");
    console.log("게임시작!");
  }

  const moveList = () => {
    history.push("/entry/List");
  };
    
  return (
    <div>


      <TopHeader/>

      {/* D_pink */}
      <div className="app">
        <img src="/img/logo192.svg" className="App-logo" alt="logo" />
      </div>



      {/* START버튼 */}
      <button onClick={() => onStart()}>START</button>
      <button onClick={() => moveList()}>랭킹</button>
      <h3>
        <p>
          start버튼을 눌러서 게임시작!<br></br>
        </p>
      </h3>


      <hr/>

      {/* 게임설명 */}
      <h3>
        <p>
          게임설명
        </p>
      </h3>

      <h4>
        <p>
          5초 안에 버튼을 마구 눌러<br></br>
          SCORE를 최대한 올려보세요<br/>

        </p>
      </h4>

      <h6>
        <p>
          게임에 참여해주신 분들 중<br/>
          추첨을 통해 신제품 도넛 기프티콘을 보내드려요!<br/> 
        </p>
      </h6>



    </div>
  );
};

export default Main;
