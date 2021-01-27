import { useReducer, useRef } from 'react';
import '../style/App.css';
import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const handleTodos = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { title: action.payload, id: uuidv4(), complete: false },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return [];
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(handleTodos, []);

  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: titleRef.current.value });
    titleRef.current.value = '';
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <input ref={titleRef} />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{' '}
            <button
              onClick={() => dispatch({ type: REMOVE_TODO, payload: todo.id })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
data: todo[] 
[
{},
{},
{}
]

type Todo {
 title: string,
 id: string,
 complete: boolean
}
*/
