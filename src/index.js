import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { userData, mySelf } from './data';
import DemoPage from './demoPage';

const Index = () => (
  <div>
    <DemoPage userData={userData} myData={mySelf} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
