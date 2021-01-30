import React, { useState} from 'react';
import { RiDeleteBinFill,RiEdit2Fill,RiArrowGoBackFill,RiSave2Fill } from 'react-icons/ri'

import { REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from '../constants/todos';
import { definePriorityClass } from '../utils/functionHelpers';
import {relevanceHandler} from '../utils/relevanceHandler'

export default function Todo({
  todo: { complete, id, title, priority, relevance },
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
      <div className= "edit-template-container">
        <p>Change the name of: {title}</p>
        <input value={newTitle} onKeyPress={(e) => e.key === 'Enter' && handleSave(e)} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => setIsEditing(false)}><RiArrowGoBackFill /></button>
        <button onClick={handleSave}><RiSave2Fill /></button>
      </div>
    );
  }

  const priorityClass = definePriorityClass(priority);
  
  const relevanceIcon = relevanceHandler (relevance)

  return (
    <li className="todo">
      <input
        type="checkbox"
        onChange={() => dispatch({ type: TOGGLE_TODO, payload: { id } })}
        checked={complete}
      />
      <span type="button" >{relevanceIcon}</span>
      <span
        type="button"
        className={
          complete ? `is-complete ${priorityClass}` : `${priorityClass}`
        }
        onClick={() => dispatch({ type: TOGGLE_TODO, payload: { id } })}
      >
        {title}
      </span>
      <button onClick={() => setIsEditing(true)}><RiEdit2Fill /></button>
      <button
        type="button"
        onClick={() => dispatch({ type: REMOVE_TODO, payload: { id } })}
      >
       <RiDeleteBinFill />
      </button>
    </li>
  );
}
