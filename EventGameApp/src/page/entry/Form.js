import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/entry";

import axios from "axios";

//Info.js를 Form으로 바꿉니다
//DAY4  >   hooksfunctionapp    >   joinform.js "nickname"을 "email"로 바꿨음
//어 input.js를 따로 만들어야하나? => End.js
// https://hyunseob.github.io/2019/06/02/react-component-the-right-way/
//기프티콘을 받을 수신자 이름과 연락처(번호는 좀 그래서 email로 변경)
function Form() {
  const dispatch = useDispatch();
  let history = useHistory();

  const onEntryList = () => {
    history.push("/entry/List");
  };

  // DB에 저장한 score데이터
  const [entryList, setEntryList] = useState([]);
  const [resultScore, setResultScore] = useState([]);
  //form data
  //얘도 리스트에 보내줘야하는 게 아닐까?
  const [user, setUser] = useState({
    no: 1,
    score: 0,
    name: "",
    email: "",
    entry_id: 1,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no, setNo] = useState("");
  const [datetime, setDatetime] = useState("");
  const [score, setScore] = useState("");

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

  //유저정보 데이터 바인딩 처리함수       //이거 넣으니까 데이터입력해주세요 false alert안 뜬다!
  const onUserChange = (e) => {
    console.log("");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //데이터 백엔드 저장처리함수
  const onEntryDataSave = () => {
    console.log("이름+이메일 입력완료");
    // 유효성검사 만약 form이 비어있으면
    if (user.name == "") {
      alert("이름을 입력해주세요.");
      return false;
    }

    if (user.email == "") {
      alert("이메일을 입력해주세요.");
      return false;
    }
    dispatch(setUserInfo(user));
  };

  //나중에 날리셈^_^ㅋ
  useEffect(() => {
    // Axios 백엔드
    const apiUrlEntry = "http://localhost:8000/api/entry/";

    // user 응모정보 이름/이메일
    axios
      .post(apiUrlEntry, user)
      .then((response) => {
        console.log("등록완료데이터:", response.data);
        alert("등록완료");
        history.push("/entry/List");
      })
      .catch((response) => {
        console.error(response);
      });

    const apiUrlScore = "http://localhost:8000/api/score/";

    //Counter의 점수를 DB에서 가지고와서 보여주자
    axios
      .get(apiUrlScore)
      .then((response) => {
        console.log("등록완료데이터:", response.data);
        alert("score axios error 덜덜쓰...");
        setResultScore(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  });

  return (
    <div>
      Score :
      {/* {resultScore.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            <div>{item.score}</div>
          </React.Fragment>
        );
      })} */}
      <table>
        <tbody>
          {/* 응모폼 작성하는 곳 */}
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
