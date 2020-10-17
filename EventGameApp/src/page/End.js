import React, { useState } from "react";

import TopHeader from "../components/TopHeader";
import Form from "./entry/Form";
// import axios from "axios";

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

      <Form />
    </div>
  );
};

export default End;
