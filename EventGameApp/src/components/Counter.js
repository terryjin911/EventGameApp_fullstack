import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

function Button() {
  const [score, setScore] = useState(0);

  const [value, setValue] = useState("");

  const [sec, setSec] = useState();

  let scoreRef = useRef("");
  useEffect(() => {
    scoreRef.current = score;
  });

  // const onChange = useCallback((e) => {
  //   setValue(e.target.value);
  // }, []);

  // const onChange =(e) => {
  //   setValue(e.target.value)
  // };

  // const [user, setUser] = useState({
  //   score: "",
  // });

  // const [user, setUser] = useState({
  //   no:1,
  //   name: "",
  //   email: "",
  //   datetime: "",
  //   entry_id: 1,
  // });

  useEffect(() => {
    setTimeout(() => {
      console.log("현재 최종 스코어는???", scoreRef.current);

      if (window.confirm("응모 페이지를 이동하시겠습니까?") == true) {
        var data = {
          name: "user1",
          email: "test@test.co.kr",
          score: scoreRef.current,
          no: 1,
        };

        // Score를 DB에 쏴버리기
        const apiUrl = "http://localhost:8000/api/entry/";

        axios
          .post(apiUrl, data)
          .then((response) => {
            console.log("점수데이터전송:", response.data);
            window.location = "/entry/input/";
          })
          .catch((response) => {
            console.error(response);
          });
      } else {
        return false;
      }
    }, 5000);

    return () => {
      clearTimeout(sec);
    };
  }, []);

  const onIncrease = (e) => {
    setScore((prevScore) => prevScore + 14500);
    console.log(`${score}점 기록`);
  };

  const onScoreChange = (e) => {
    setScore({ ...score, [e.target.value]: e.target.value });
  };

  const onEntryDataSave = () => {};

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
