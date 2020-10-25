import React from "react";
import { useHistory } from "react-router-dom";

import TopHeader from "../components/TopHeader";

import ButtonUI from '../components/ButtonUI';


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
      
      <div className="container">
        {/* Bat */}
        {/* <div className="back">
          <img src="/img/Bat1.svg" className="App-S_logo" alt="logo" /> */}
        {/* D_pink */}
        <div className="front">
          <img src="/img/logo192.svg" className="App-logo" alt="logo" />
        </div>
        {/* </div> */}
      </div>


      <ButtonUI variant="contained" color="primary" onClick={() => onStart()}>
        dmld
      </ButtonUI>

      {/* START버튼 */}
      
      <button onClick={() => moveList()}>랭킹</button>


      
      <h3>
        <p>
          start버튼을 눌러서 게임시작!<br/>
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
          흑임자도넛을 노리는<br></br>
          박쥐 내쫓아서 점수를 얻으세요<br/>
          시간은 5초!

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
