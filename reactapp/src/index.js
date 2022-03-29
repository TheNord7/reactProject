import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const word = "react";

ReactDOM.render(
  <React.StrictMode>
    <App name={word} />
  </React.StrictMode>,
  document.getElementById('root')
);

