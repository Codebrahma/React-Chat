import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { userData } from './data';
import DemoPage from './demoPage';

const Index = () => (
  <div>
    <DemoPage userData={userData} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
