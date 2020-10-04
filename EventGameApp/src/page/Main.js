import React from "react";
import Board from "./Board";

//게임설명과 startButton이 있는 화면
const Main = () => {

  const onStart = () => {
  
    // let history = useHistory();
    window.location = "/ingame";
    
    // history.push("Input");
    console.log("게임시작!");
  }
    
  return (
    <div>
      
      {/* <br></br> */}
      {/* <a className="App-start" rel="noopener noreferrer"> */}
        <button onClick={() => onStart()}>START</button>
      {/* </a> */}
      {/* <br></br>
      <br></br> */}
      <h3>
        <p>
          start 버튼을 눌러서 게임시작!<br></br>
          <br></br>
          5초 안에 도넛을 없애서<br></br>
          SCORE를 올려보세요!
        </p>
      </h3>
    </div>
  );
};



//function을 이렇게 쓰는게 아닌것같은 느김^_^,,,,


// const onStart = () => {
  
//   let history = useHistory();
//   // window.location = "/input";
  
//   history.push("Input");
//   console.log("게임시작!");


//   return <div>
//     <div>

//       <br></br>
//       <a className="App-start" ref="/ingame" rel="noopener noreferrer">
//         <button onClick={() => onStart()}>START</button>
//       </a>
      
//     </div>    
//   </div>;
// };

export default Main;
