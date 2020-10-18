import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Main from './page/Main';
import End from './page/End';
import List from './page/entry/List';
import Form from './page/entry/Form';
import Game from './page/Game';

// import TodoApp from './components/TodoApp';

function App() {
  return (
    <div>
      {/* <TodoApp /> */}
      <div className="App">
        <header className="App-header">
          <Route path="/" component={Main} exact={true} />
          <Route path="/Game" component={Game} />
          <Route path="/entry/input/" component={End} />
          <Route path="/entry/List" component={List} />
          {/* Form = End인데 얘는 누구지 */}
          <Route path="/Form" component={Form} />
        </header>

        {/* <Button /> */}
      </div>
    </div>
  );
}

export default App;
