import React, { useState } from "react";

import axios from "axios";

function Button() {
  const [score, setScore] = useState(0);

  const [user, setUser] = useState({
    score: "",
  });

  // const [user, setUser] = useState({
  //   no:1,
  //   name: "",
  //   email: "",
  //   datetime: "",
  //   entry_id: 1,
  // });

  const onIncrease = () => {
    setScore((prevScore) => prevScore + 14500);
    console.log(`${score}점 기록`);
  };

  // Score를 DB에 쏴버리기
  const apiUrl = "http://localhost:8000/api/entry/";

  axios
    .post(apiUrl, score)
    .then((response) => {
      console.log("점수데이터전송:", response.data);
      // alert("등록완료");
      // history.push("/entry/List");
    })
    .catch((response) => {
      console.error(response);
    });

  return (
    <div>
      <h1>Score: {score}</h1>
      <br></br>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
}

export default Button;
