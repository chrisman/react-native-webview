import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import Filter from './components/Filter';

function App(props) {
  const [ tasks, setTasks ] = useState(props.tasks);
  const [ activeFilter, setActiveFilter ] = useState('All');

  const FILTERS = {
    All: () => true,
    Active: task => !task.isComplete,
    Complete: task => task.isComplete,
  };

  const addTask = (name) => {
    const newTask = {
      id: 'todo-' + Date.now(),
      name,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => Object.assign(
      task,
      {
        isComplete: (task.id === id)
          ? !task.isComplete
          : task.isComplete
      },
    )))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id, newName) => {
    setTasks(tasks.map(task => Object.assign(
      task,
      {
        name: (id === task.id)
          ? newName
          : task.name
      }
    )));
  }

  const taskList = tasks
    .filter(FILTERS[activeFilter])
    .map(task => (
      <Todo
        name={task.name}
        isComplete={task.isComplete}
        id={task.id}
        key={task.id}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))

  const filterList = Object.keys(FILTERS)
    .map(key =>
      <Filter
        key={key}
        name={key}
        isPressed={key === activeFilter}
        setFilter={setActiveFilter}
      />
    );

  return (
    <div>
      <h2>{taskList.length} {taskList.length === 1 ? 'task' : 'tasks'}</h2>
      <Form addTask={addTask} />
      <div>{filterList}</div>
      <ul>{taskList}</ul>
    </div>
  );
}

export default App;
