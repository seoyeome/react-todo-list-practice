import React from 'react';
import Header from './component/Header.js';
import Time from './component/Time.js';
import TodoList from './component/TodoList.js';

function App() {
  return (
    <>
      <Header>ToDo list</Header>
      <Time/>
      <TodoList></TodoList>
    </>
  );
}

export default App;
