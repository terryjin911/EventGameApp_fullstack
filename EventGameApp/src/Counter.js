import React, { useState } from "react";

// DAY7     >   react-redux-tutorial    >   Counter.js 베껴왔는데..얘 어케쓰냐

function Button() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 14500);
    console.log(`${number}점 기록`);
  };

  return (
    <div>
      <h1>Score: {number}</h1>
      <br></br>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
}

export default Button;
