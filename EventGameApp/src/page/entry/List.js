import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopHeader from '../../components/TopHeader';
// import Shere from "../../components/Share";
import axios from 'axios';

const List = () => {
  // let history = useHistory();

  //해당 컴포넌트에서 사용할 응모유저 리스트 useState
  const [entryList, setEntryList] = useState([]);
  // const entryList = users.map((users, index) => <li key={index}> {users} </li>;

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/api/entry/';

    axios
      .get(apiUrl)
      .then((response) => {
        console.log('조회완료 데이터: ', response.data);
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

      {/* 사용자이름 최종스코어 응모날짜 */}
      {entryList.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            <div>
              <Link to={`/entry/list/${item.id}`}>
                {item.name} | {item.score} | {item.datetime}
              </Link>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default List;
