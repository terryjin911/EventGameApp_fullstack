import React, { useState } from "react";


function Button() {
  const [num, setNum] = useState(0);

  const onIncrease = () => {
    setNum((prevNum) => prevNum + 14500);
    console.log(`${num}점 기록`);
  };

  return (
    <div>
      <h1>Score: {num}</h1>
      <br></br>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
}

export default Button;
