import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';/* библиотека, отвечающая за корректную работу
веб-метрик */
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/antd.css";
import classes from './App.module.css';

//import store from '../redux/redux_store'; 
const root = ReactDOM.createRoot(document.getElementById('root'));/* ранее в index.html в body был создан
единственный div с id = root, в этой строке этот DOM элемент предоставляется для
последующего рендеринга корневого элемента */ 
root.render(          /* React.StrickMode - это строгий режим, он не рендерит
  видимого UI, а просто активирует дополнительные проверки и предупреждения 
  для своих потомков. */
  <React.StrictMode> 
    <App className={classes.app}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
