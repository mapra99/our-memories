import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../javascript/react/posts/App';
import '../../../styles/global/index.scss';

console.log(document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
