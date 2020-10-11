import React, { useState } from "react";


import TopHeader from "../../components/TopHeader";
import Form from "../Form";
import axios from "axios";

const End = () => {




  const [number, setNumber] = useState(0);

  // const onClickFunction = (e) => {
  //   window.confirm(
  //     `응모자 성함과 이메일 정보를 확인해주세요 ${username}, ${useremail}` //왜 둘중 하나만 뜨냐
  //   );
  //   setUserName("");
  //   setUserEmail("");
  // };


  //Ingame에서 받아온 totalScore
  // const totalScore {

  //   return <div>
  //     <h1>나의 총 Score: {props.totalScore}</h1>;
  //     </div>
  // }
  return (
    <div>
      <TopHeader/>
      


      {/* D_blue */}
      <div className="app">
        <img src="/img/logo512.svg" className="App-logo" alt="logo" />
      </div>


      <div>
        <h1>응모페이지</h1>
        
        {/* 총 점수 기록 */}
        <h2>Score : {number}점</h2>
      </div>

      <Form/>
    </div>
  );
};

export default End;