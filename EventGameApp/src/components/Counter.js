import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setEntry } from "../redux/entry";
import ProgressBar from "../components/progress-bar.component";

function Button() {
  const dispatch = useDispatch();
  let history = useHistory();

  
  const [score, setScore] = useState(0);

  const [sec, setSec] = useState();

  let scoreRef = useRef("");
  useEffect(() => {
    scoreRef.current = score;
  });

  
  // ProgressBar 시작
  let secRef = useRef("");
  useEffect(() => {
    secRef.current = sec;
  });
  const secc = useRef(1);
  const setSecc = (n) => {
    secc.current = n;
  }
  const printSecc = () => {
    console.log(secc.current);
  }
  const [completed, setCompleted] = useState(0);
  const testData = [
    { bgcolor: "#6a1b9a", completed: `${completed}`, secc: `${secc}` },
  ];
  // ProgressBar 끝


  
  //와 setTimeout 진짜 어렵다ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  useEffect(() => {
    setTimeout(() => {
      // Timeout 5초가 끝나면 최종 스코어를 로그에 저장

      // setScore(scoreRef.current + 14500);
      // setTimeout이 끝났을 때 최종스코어를 리덕스에 담음
      dispatch(setEntry(scoreRef.current));
      console.log("현재 최종 스코어는???", scoreRef.current);
      //왜냐하면 여기서 name,email 값을 ""로 넣으면 전송이 안 되더라^_^,,,,,,,,,아
      if (
        window.confirm(
          "5초 끝! 응모 페이지로 이동하시겠습니까? [취소]를 누르면 게임을 다시 시작합니다"
        ) == true
      ) {
        dispatch(setEntry(scoreRef.current));
        history.push("/entry/input/");
        
        // var data = {
        //   regiId: 8,
        //   name: "25인데 발표가 29일이네?",
        //   email: "oct25@naver.com",
        //   score: scoreRef.current,
        // };
        // // Score를 DB에 쏴버리기
        // const apiUrlEntry = "http://localhost:8000/api/entry/";
        // axios
        //   .post(apiUrlEntry, data)
        //   .then((response) => {
        //     console.log("점수데이터전송:", response.data);
        //     window.location = "/entry/input/";
        //   })
        //   .catch((response) => {
        //     console.error(response);
        //   });
      } else {
        return window.location = "/Game";;
      }
    }, 5000);

    return () => {
      clearTimeout(sec);
    };
  }, []);

  const onIncrease = (e) => {
    setScore(scoreRef.current + 14500);
    dispatch(setEntry(score));
    console.log(`${score}점 기록`);
  };



  return (
    <div>
      <div>
        {/* progrss bar */}
        {/* <div>
          <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
        </div>

        <div>
          {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} sec={item.sec} />
          ))}
        </div> */}
      </div>

      <h1>Score: {score}점</h1>
      <br></br>

      <button onClick={onIncrease}>
        도넛
      </button>
      <button onClick={onIncrease}>좋아</button>
    </div>
  );
}

export default Button;
