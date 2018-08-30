import React from 'react';
import DemoPageNavbar from './DemoPageNavbar';
import './resources/animate.scss';
import { Chat } from '../components';

import './demopageStyle.scss';

//  Test function for callback which the user needs to pass as props
function testCallback(id) {
  console.log(id, 'called chatItem callback handler');
  return true;
}

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
    <Chat handleItemCallback={testCallback} {...props} />
  </div>
);


export default DemoPage;
