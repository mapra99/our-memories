import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../javascript/react/posts/App';
import '../../../styles/global/index.scss';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
