import React from 'react';
import { render } from 'react-dom';
// import App from './app';

import './main.scss';

/* eslint-disable */
const App = () => (
  <div>
    <h1>React Boilerplate</h1>
    <p>Make sure to delete .git and README.md before starting fresh</p>
  </div>
);

render(<App />, document.getElementById('react-root'));
/* eslint-enable */
