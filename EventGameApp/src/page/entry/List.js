import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

import TopHeader from "../../components/TopHeader";
// import Shere from "../../components/Share";
import axios from "axios";

const List = () => {
  //entry.js에 있는 state랑 다름ㅁ
  const globalEntry = useSelector((state) => state.entry.users);
  // let history = useHistory();

  //해당 컴포넌트에서 사용할 응모유저 리스트 useState
  const [entryList, setEntryList] = useState([]);
  // const entryList = users.map((users, index) => <li key={index}> {users} </li>;

  useEffect(() => {
    const apiUrlEntry = "http://localhost:8000/api/entry/";
    console.log("리덕스테스트", globalEntry);
    axios
      .get(apiUrlEntry)
      .then((response) => {
        console.log("조회완료 데이터: ", response.data);
        setEntryList(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  }, []);

  return (
    <div>
      {/* <Shere /> */}
      <TopHeader />

      <h1>응모확인 페이지</h1>
      <div>
        {/* {globalEntry} */}
      </div>




      {entryList.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            <div>
            {item.score}점 | {item.name} | {item.datetime}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default List;
