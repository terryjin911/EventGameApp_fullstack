import React from "react";
import { useHistory } from "react-router-dom";

import TopHeader from "../components/TopHeader";

import Button from "@material-ui/core/Button";

//게임설명과 startButton이 있는 화면
const Main = () => {
  let history = useHistory();

  const onStart = () => {
    history.push("/game");
    console.log("게임시작!");
  };

  const moveList = () => {
    history.push("/entry/List");
  };

  return (
    <div>
      <TopHeader />
      {/* D_pink */}
      <div className="back">
        <img src="/img/d-chasing.svg" className="d-chasing1" alt="logo" />
        <img src="/img/d-chasing.svg" className="d-chasing2" alt="logo" />
        <img src="/img/d-chasing1.svg" className="d-chasing3" alt="logo" />
        <img src="/img/d-chasing2.svg" className="d-chasing4" alt="logo" />
        <img src="/img/Bat1.svg" className="App-S_logo" alt="logo" />
      </div>

      <div>
        <div>
          {/* START버튼 */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onStart()}
          >
            START
          </Button>

          {/* 랭킹보기 버튼 */}
          <Button variant="contained" color="info" onClick={() => moveList()}>
            랭킹
          </Button>
        </div>

        <h3>
          <p>
            start버튼을 눌러서 게임시작!
            <br />
          </p>
        </h3>

        <hr />

        {/* 게임설명 */}
        <h2>
          <p>게임설명</p>
        </h2>
        <h4>
          <p>
            주어진 시간은 5초!
            <br />
            <br />
            흑임자도넛을 노리는<br></br>
            박쥐 쫒아내고 점수를 얻으세요
          </p>
        </h4>
        <h6>
          <p>
            게임에 참여해주신 분들 중<br />
            추첨을 통해 신제품 도넛 기프티콘을 보내드려요!
            <br />
          </p>
        </h6>
      </div>
    </div>
  );
};

export default Main;
