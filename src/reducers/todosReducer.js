import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
} from '../constants/todos';

export default function handleTodos(state, action) {
  const { title, id, newTitle, priority, relevance } = action.payload;

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { title: title, id: uuidv4(), complete: false, priority, relevance },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== id);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      );
    default:
      return state;
  }
}
