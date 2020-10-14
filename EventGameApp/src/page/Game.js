import React, { useState, useEffect } from "react";

import Counter from "../components/Counter";
import TopHeader from "../components/TopHeader";

const Game = (Button) => {
  const [sec, setSec] = useState();





  useEffect(() => {
    //컴포넌트가 마운트 되고 setTimeout 함수를 실행
    setTimeout(() => {
      // window.confirm(
      //   `${sec}초 경과, 게임 끝! 참여해주셔서 감사합니다.\n이벤트 응모페이지로 이동합니다`
      // )

      if (window.confirm() == true) {
        window.location = "/input";
      } else {
        return false;
      }

      console.log(`${sec}초 경과, 게임 끝!`);
      window.location = "/entry/input/"; //여기에 놓을거면 window.confirm 아니어도 alert를 했어도 됐음
      //confirm을 놓은 이유는 true false를 하려고 놓은건데..
      //[취소]누르면 해당 페이지에 머무르,,,면 또 안되지않나 그럼 다시 응모하는 페이지로 넘기기 힘드니까?
      //    else를 누르면 main페이지로 돌아가게할까?
    }, 5000);

    return () => {
      clearTimeout(sec);
    };
  }, []); //두번째 인자로 빈 배열 넣어주기

    

  return <div>
    


    <TopHeader/>


    {/* D_pink */}
    <div className="app">
      <img src="/img/logo192.svg" className="App-S_logo" alt="logo" />
    </div>



    {/* 스코어버튼 */}
    <Counter/>


  </div>;
};

export default Game;
