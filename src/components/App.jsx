/* eslint-disable jsx-a11y/no-static-element-interactions */
import { React, useReducer, useRef, useState } from 'react';
import handleTodos from '../reducers/todosReducer';
import { ADD_TODO } from '../constants/todos';
import '../style/App.css';
import TodoList from './TodoList';

function App() {
  const [todos, dispatch] = useReducer(handleTodos, []);
  const [priority, setPriority] = useState('standard');
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_TODO,
      payload: { title: titleRef.current.value, priority },
    });
    titleRef.current.value = '';
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input ref={titleRef} />
        <label htmlFor="">priority:</label>
        <select onChange={(e) => setPriority(e.target.value)} name="priority">
          <option value="standard">standard</option>
          <option value="important">important</option>
          <option value="urgent">urgent</option>
        </select>
      </form>
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
