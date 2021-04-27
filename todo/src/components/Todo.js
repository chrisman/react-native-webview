import React, { useState } from 'react';

function Todo({
  name = 'lol',
  isComplete = 'true',
  id = 'id',
  toggleComplete = () => {},
  deleteTask = () => {},
  editTask = () => {},
}) {

  const [ isEditing, setIsEditing ] = useState(false);
  const [ newName, setNewName ] = useState("");

  const handleChange = ({ target: { value }}) => {
    setNewName(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editTask(id, newName);
    setNewName('');
    setIsEditing(false);
  }

  const editTemplate = (
    <form onSubmit={handleSubmit}>
      <input
        value={newName}
        type="text"
        onChange={handleChange}
      />
      <button type="submit">save</button>
      <button onClick={() => {setIsEditing(false)}}>cancel</button>
    </form>
  );

  const viewTemplate = (
    <div>
      <input
        id={id}
        type="checkbox"
        defaultChecked={isComplete}
        onChange={() => toggleComplete(id)}
      />
      <label htmlFor={id}>{ name }</label>
      <button onClick={() => {setIsEditing(true)}}>edit</button>
      <button onClick={() => deleteTask(id)}>delete</button>
    </div>
  );

  return (
    <li>
      {isEditing ? editTemplate : viewTemplate}
    </li>
  )
}

export default Todo;
