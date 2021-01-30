/* eslint-disable jsx-a11y/no-static-element-interactions */
import { React, useReducer, useRef, useState } from 'react';
import handleTodos from '../reducers/todosReducer';
import { ADD_TODO } from '../constants/todos';
import '../style/App.css';
import TodoList from './TodoList';

function App() {
  const [todos, dispatch] = useReducer(handleTodos, []);
  const [priority, setPriority] = useState('standard');
  const [relevance, setRelevance] = useState('work')
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_TODO,
      payload: { title: titleRef.current.value, priority, relevance },
    });
    titleRef.current.value = '';
  };

  return (
    <div className="App" >
      <h1 className= "title">To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add To Do" ref={titleRef} />
        <select onChange={(e) => setPriority(e.target.value)} name="priority">
          <option value="standard">standard</option>
          <option value="important">important</option>
          <option value="urgent">urgent</option>
        </select>
        <select onChange={(e) => setRelevance(e.target.value)} name="relevance">
          <option value="work">work</option>
          <option value="home">home</option>
          <option value="personal">personal</option>
        </select>
        <button className='btn'>Add</button>
      </form>
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
