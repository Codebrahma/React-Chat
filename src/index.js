import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

const Index = () => (
  <div className={styles.cb}>
    Hello React Chat!
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
