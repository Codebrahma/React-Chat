import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import Home from './examples/Home'

const Index = () => (
  <div>
    <Home />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
