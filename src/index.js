import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from "./Routes"
// import * as serviceWorker from './serviceWorker';
// router import
ReactDOM.render(<Routes />, document.getElementById('root'));
// <App /> 컴포넌트를 <Routes />로 변경
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
