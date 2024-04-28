import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import favicon from './assets/Y.ico';

ReactDOM.render(
  <React.StrictMode>
    <link rel="icon" href={favicon} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


