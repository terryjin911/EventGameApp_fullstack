import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import ProgressBar from "../components/progress-bar.component";

function Button() {
  const [score, setScore] = useState(0);

  const [value, setValue] = useState("");

  const [sec, setSec] = useState();

  let scoreRef = useRef("");
  useEffect(() => {
    scoreRef.current = score;
  });

  // let secRef = useRef("");
  // useEffect(() => {
  //   secRef.current = sec;
  // });

  // const secc = useRef(1);
  // const setSecc = (n) => {
  //   secc.current = n;
  // }
  // const printSecc = () => {
  //   console.log(secc.current);
  // }

  // const [completed, setCompleted] = useState(0);
  // const testData = [
  //   { bgcolor: "#6a1b9a", completed: `${completed}`, secc: `${secc}` },
  // ];

  useEffect(() => {

    setTimeout(() => {
      // setInterval(() => setCompleted(Math.floor(Math.random * 100) + 1), 4800);
      // let timerId = setInterval(() => alert('tick'), 2000); //(111-2) 얘가 에러나네?
      // console.log("setInterval 작동하냐? :", timerId);

      // const time = 5;
      // const seconds = "";

      // const x = setInterval(function() {
      //   // seconds = time%5;                               //(111-1) 얘때문에

      //   document.getElementById("demo").innerHTML = seconds +"초";

      //   time--;

      //   //타임아웃시
      //   if (time < 0) {
      //     clearInterval(x);
      //     document.getElementById("demo").innerHTML = "시간 끗ㅋ"
      //   };
      // })


      // Timeout 5초가 끝나면 최종 스코어를 로그에 저장
      console.log("현재 최종 스코어는???", scoreRef.current);

      //왜냐하면 여기서 name,email 값을 ""로 넣으면 전송이 안 되더라^_^,,,,,,,,,아
      if (window.confirm("응모 페이지로 이동하시겠습니까? [취소]를 누르면 기록 저장되지 않습니다.") == true) {
        var data = {
          name: "점수데이터 name",
          email: "점수데이터 email",
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




  return (
    <div>

      {/* progrss bar */}
      {/* <div>
        <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
      </div> */}

      {/* <div>
         {testData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} sec={item.sec} />
         ))}
       </div> */}
      

      <h1>Score: {score}</h1>
      <br></br>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
}

export default Button;
