import React, { useState } from "react";

import axios from "axios";
const End = () => {
  //사용자 이름관리 스테이트 정의 및 초기값 세팅
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");

  //form data
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const { name, email } = user;

  //유저정보 데이터 바인딩 처리함수       //이거 넣으니까 데이터입력해주세요 false alert안 뜬다!
  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const onClickFunction = (e) => {
  //   window.confirm(
  //     `응모자 성함과 이메일 정보를 확인해주세요 ${username}, ${useremail}` //왜 둘중 하나만 뜨냐
  //   );
  //   setUserName("");
  //   setUserEmail("");
  // };

  //데이터 백엔드 저장처리함수
  const onEntryDataSave = () => {
    // 유효성검사 만약 form이 비어있으면
    if (user.name == "") {
      alert("이름을 입력해주세요.");
      return false;
    }

    if (user.email == "") {
      alert("이메일을 입력해주세요.");
      return false;
    }

    const apiUrl = "http://localhost:800/api/entryusers/";

    axios
      .post(apiUrl, reserve)
      .then((response) => {
        console.log("등록완료데이터:", response.data);
        alert("등록완료");
        history.push("List");
      })
      .catch((response) => {
        console.error(response);
      });
  };

  //Ingame에서 받아온 totalScore
  // const totalScore {

  //   return <div>
  //     <h1>나의 총 Score: {props.totalScore}</h1>;
  //     </div>
  // }
  return (
    <div>
      <div>
        {/* 점수표시 OR .... */}
        <h2>Score : </h2>
      </div>

      {/* 응모 폼 */}
      <form>
        <p>Name : </p>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          // value="user.name"
          onChange={(e) => onUserChange(e)}
        />

        <p>Email : </p>
        <input
          type="text"
          name="email"
          placeholder="이메일을 입력하세요"
          // value="user.email"
          onChange={(e) => onUserChange(e)}
        />
        <br></br>

        {/* 응모 폼 전송버튼 */}
        <button onClick={() => onEntryDataSave()}>응모</button>
      </form>
    </div>
  );
};

export default End;
