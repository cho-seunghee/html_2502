import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; //전역 css 설정

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);