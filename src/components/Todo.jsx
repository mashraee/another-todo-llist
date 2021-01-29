import React, { useState } from 'react';
import { REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from '../constants/todos';
import { definePriorityClass } from '../utils/functionHelpers';

export default function Todo({
  todo: { complete, id, title, priority },
  dispatch,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setTitle] = useState('');

  const handleSave = () => {
    setIsEditing(false);
    dispatch({ type: EDIT_TODO, payload: { newTitle, id } });
  };

  if (isEditing) {
    return (
      <div>
        <p>Change the name of: {title}</p>
        <input value={newTitle} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => setIsEditing(false)}>cancel</button>
        <button onClick={handleSave}>save</button>
      </div>
    );
  }

  const priorityClass = definePriorityClass(priority);

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => dispatch({ type: TOGGLE_TODO, payload: { id } })}
        checked={complete}
      />
      <span
        type="button"
        className={
          complete ? `is-complete ${priorityClass}` : `${priorityClass}`
        }
        onClick={() => dispatch({ type: TOGGLE_TODO, payload: { id } })}
      >
        {title}
      </span>
      <button
        type="button"
        onClick={() => dispatch({ type: REMOVE_TODO, payload: { id } })}
      >
        X
      </button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
}
