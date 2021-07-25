import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; // TODO: Start migration of frontend app here
import '../../../styles/global/index.scss';

console.log(document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> // TODO: Start migration of frontend app here */}
    <h1>TyTEA</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
