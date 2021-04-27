import React, { useState } from 'react';

function Form({ addTask }) {
  const [ name, setName ] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
