import React, { useState, useCallback } from "react";

import End from "./components/End";
//DAY4  >   hooksfunctionapp    >   joinform.js "nickname"을 "email"로 바꿨음
//어 input.js를 따로 만들어야하나? => End.js
// https://hyunseob.github.io/2019/06/02/react-component-the-right-way/
//기프티콘을 받을 수신자 이름과 연락처(번호는 좀 그래서 email로 변경)
function SendForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = useCallback(({ target: { value } }) => {
    setName(value);
  }, []);

  const handleChangeEmail = useCallback(({ target: { value } }) => {
    setEmail(value);
  }, []);

  //input이 다시 렌더링되지 않게하는 함수
  const handleSubmit = useCallback(() => {
    console.log(name, email);
  }, [name, email]);

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="name" placeholder="이름" value={name} onChange={(target:{value})=> setName(value)} />
          <input type="email" placeholder="이메일" value={email} onChange={(target: {value}) => setEmail(value)} /> */}
      <input
        type="name"
        placeholder="이름"
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={handleChangeEmail}
      />
      <button type="submit">응모하기</button>
    </form>
  );
}

export default SendForm;
