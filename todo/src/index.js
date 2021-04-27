import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import tasks from './data.json';

ReactDOM.render(
  <React.StrictMode>
    <App tasks={window.myConfig || []} />
  </React.StrictMode>,
  document.getElementById('root')
);
