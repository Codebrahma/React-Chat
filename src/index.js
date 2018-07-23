import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import Home from './components/Home'

const Index = () => (
  <div className={styles.cb}>
  <Home />
    Hello React Chat!
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
