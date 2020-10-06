import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const End = () => {
  let history = useHistory();

  const onEntryList = () => {
    history.push("../List");
  }
  //사용자 이름관리 스테이트 정의 및 초기값 세팅
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");

  //form data
  const [user, setUser] = useState({
    no:1,
    name: "",
    email: "",
    datetime: "",
    entry_id: 1,
  });

  //  React책 165page 데이터 추가 기능 구현하기

  // const { name, email, datetime, entry_id } = users;
  // const users = [`${name}, ${email}, ${datetime}, ${entry_id}`];
  const users = ["name", "email", "datetime", "entry_id"];
  const userList = users.map((users, index) => <li key={index}>{users}</li>);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChnage = (e) => setInputText(e.target.value);

  // const user

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




    const apiUrl = "http://localhost:8000/api/entry/";

    axios
      .post(apiUrl, user)
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
        <h1>응모페이지</h1>
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
        <button onClick={() => onEntryDataSave()}> 응모 </button>
        <button onClick={() => onEntryList()}> 응모확인 </button>
      </form>
    </div>
  );
};

export default End;
