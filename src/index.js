import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import App from './components/App'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
)