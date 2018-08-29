import React from 'react';
import DemoPageNavbar from './DemoPageNavbar';
import './resources/animate.scss';
import { Chat } from '../components';

import './demopageStyle.scss';

const DemoPage = props => (
  <div className="demo-home">
    <DemoPageNavbar />
    <div className="demo-page-intro">
      <div className="demo-intro animated fadeInUp">
        <h2>
A reusable React Chat App module.
        </h2>
        <p>
          Click on the chat icon at the bottom right of the page and select any
          user to start a demo chat!
        </p>
      </div>
    </div>
    <Chat {...props} />
  </div>
);


export default DemoPage;
