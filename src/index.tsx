import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './plugins/axios'
import App from './App';
import { makeServer } from "./services/mock/index";

if (process.env.NODE_ENV === "development") {
  makeServer()
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
