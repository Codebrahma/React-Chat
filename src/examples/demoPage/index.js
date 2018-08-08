import React, { Component } from 'react';
import Proptypes from 'prop-types';
import DemoPageNavbar from './DemoPageNavbar';
import './resources/animate.scss';
import { ChatProvider, ChatWindowBox } from '../../components';

import './demopageStyle.scss';

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatUserId: '',
    };
  }

    updateWindow = (chatUserId) => {
      this.setState({
        chatUserId,
      });
    }

    render() {
      const { userData } = this.props;
      const { chatUserId } = this.state;
      return (
        <div className="demo-home">
          <DemoPageNavbar />
          <div className="demo-page-intro">
            <div className="demo-intro animated fadeInUp">
              <h2>
A reusable React Chat App module.
              </h2>
              <p>
Click on the chat icon at the bottom right of the page and select any user to start a demo chat!
              </p>
            </div>
          </div>
          <ChatProvider updateChatWindow={this.updateWindow} userData={userData} />
          {
                    chatUserId
                    && <ChatWindowBox userId={chatUserId} {...this.props} />
                }
        </div>
      );
    }
}

DemoPage.propTypes = {
  userData: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default DemoPage;
