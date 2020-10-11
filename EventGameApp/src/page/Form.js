import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

//Info.js를 Form으로 바꿉니다
//DAY4  >   hooksfunctionapp    >   joinform.js "nickname"을 "email"로 바꿨음
//어 input.js를 따로 만들어야하나? => End.js
// https://hyunseob.github.io/2019/06/02/react-component-the-right-way/
//기프티콘을 받을 수신자 이름과 연락처(번호는 좀 그래서 email로 변경)
function Form() {

  let history = useHistory();

  const onEntryList = () => {
    history.push("/entry/List");
  }


  
         //  React책 165page 데이터 추가 기능 구현하기

  // const { name, email, datetime, entry_id } = users;
  // const users = [`${name}, ${email}, ${datetime}, ${entry_id}`];
  const users = ["name", "email", "datetime", "entry_id"];
  // 이 엔트리리스트 list.js 로 가셔야할것같은데욥...
  const entryList = users.map((users, index) => <li key={index}>{users}</li>);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChnage = (e) => setInputText(e.target.value);



  //사용자 이름관리 스테이트 정의 및 초기값 세팅
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");

  //form data
  //얘도 리스트에 보내줘야하는 게 아닐까?
  const [user, setUser] = useState({
    no:1,
    name: "",
    email: "",
    datetime: "",
    entry_id: 1,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no, setNo] = useState("");
  const [datetime, setDatetime] = useState("");



  
  const handleChangeName = useCallback(({ target: { value } }) => {
    setName(value);
  }, []);

  const handleChangeEmail = useCallback(({ target: { value } }) => {
    setEmail(value);
  }, []);
  const handleChangeNo = useCallback(({ target: { value } }) => {
    setNo(value);
  }, []);
  const handleChangeDatetime = useCallback(({ target: { value } }) => {
    setDatetime(value);
  }, []);




  //input이 다시 렌더링되지 않게하는 함수
  const handleSubmit = useCallback(() => {
    console.log(name, email);
  }, [name, email, no, datetime]);




  //유저정보 데이터 바인딩 처리함수       //이거 넣으니까 데이터입력해주세요 false alert안 뜬다!
  const onUserChange = (e) => {
    console.log("이건뭐지")
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  //데이터 백엔드 저장처리함수
  const onEntryDataSave = () => {
    console.log("이름이메일입력")
    // 유효성검사 만약 form이 비어있으면
    if (user.name == "") {
      alert("이름을 입력해주세요.");
      return false;
    }

    if (user.email == "") {
      alert("이메일을 입력해주세요.");
      return false;
    }



    // Axios 백엔드
    const apiUrl = "http://localhost:8000/api/entry/";

    axios
      .post(apiUrl, user)
      .then((response) => {
        console.log("등록완료데이터:", response.data);
        alert("등록완료");
        history.push("/entry/List");
      })
      .catch((response) => {
        console.error(response);
      });
  };



  return (
    // <div>
    
      <div>
        <table>
          <tbody>


            <tr>
              <td>Name :</td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="이름을 입력하세요"
                  value={user.name}
                  onChange={(e) => onUserChange(e)}
                />
              </td>
            </tr>


            <tr>
              <td>Email :</td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="이메일을 입력하세요"
                  value={user.email}
                  onChange={(e) => onUserChange(e)}
                />
              </td>
            </tr>

            <br></br>

            <tr>
              <td>
                {/* 응모 폼 전송버튼 */}
                <button onClick={() => onEntryDataSave()}> 응모 </button>
                <button onClick={() => onEntryList()}> 응모확인 </button>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
  );
}

export default Form;
