import TodoCSS from './Todo.module.css';
import React from 'react';

export default function Todo() {

  const { useState } = React;

  const [todos, setTodos] = useState([
    
  ])

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(1);

  const onChangeHandler = e => setInputText(e.target.value);
  const onClickHandler = () => {
    const plusTodo =  todos.concat({
      id: nextId,
      todo: inputText
    });

    setNextId(nextId + 1);
    setTodos(plusTodo);
    setInputText('');
  }

  const todoList = todos.map(
    todo => 
    <div>
      <input type="checkbox" key={ todo.id } value={ todo.todo }/>
    </div>
  );
  return(
    <div className={TodoCSS.container}>
    <div className={TodoCSS.box}>
      <input className={TodoCSS.inputbox} placeholder="오늘의 할일을 적어주세요" value={ inputText } onChange={ onChangeHandler}/>
      <button onClick={ onClickHandler }>추가</button>
      <div className={TodoCSS.todos}>{ todoList }</div>
    </div>
    </div>
    
  )
}