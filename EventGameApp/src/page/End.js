import React from 'react';

import TopHeader from '../components/TopHeader';
import Form from './entry/Form';

const End = () => {
  return (
    <div>
      <TopHeader />

      {/* D_blue */}
      <div className="app">
        <img src="/img/logo512.svg" className="App-logo" alt="logo" />
      </div>

      <div>
        <h1>응모페이지</h1>
      </div>

      {/* 응모폼 */}
      <Form />
    </div>
  );
};

export default End;
