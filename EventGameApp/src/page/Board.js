import React, { useState, useEffect } from "react";
import Counter from "../Counter";

const Ingame = (Button) => {
  const [sec, setSec] = useState();
  const [player, setPlayer] = useState();

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
      window.location = "/input"; //여기에 놓을거면 window.confirm 아니어도 alert를 했어도 됐음
      //confirm을 놓은 이유는 true false를 하려고 놓은건데..
      //[취소]누르면 해당 페이지에 머무르,,,면 또 안되지않나 그럼 다시 응모하는 페이지로 넘기기 힘드니까?
      //어렵군 :(
    }, 5000);

    return () => {
      clearTimeout(sec);
    };
  }, []); //두번째 인자로 빈 배열 넣어주기

  // if(setTimeout() == false){
  //   window.location = "/input";
  //   return false;
  // }
  return <div></div>;
};

// 버튼을 눌러서 스코어를 증가시키는 함수
// const Score = ({ number, onIncrease }) => {
//   return (
//     <div>
//       <h2>Score : {number}</h2>

//       <div>
//         <button onClick={onIncrease}>score</button>
//         <button onClick={onIncrease}>score</button>
//       </div>
//     </div>
//   );
// };

//Counter.js는 잘 작동되는데
//그게 Border.js에서 돌아가고 setTimeout도
//return됐으면 좋겠다

const Score = (Counter) => {
  return <div></div>;
};
//Score : {number} 를 totalScore로 End에 쏴줘야하는데....
//지금여기까지 화면 떠지는거만 git에 보내고싶은데

export default Ingame;
