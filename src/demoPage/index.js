import React, { Component } from 'react';
import DemoPageNavbar from './DemoPageNavbar';
import './animate.scss';
import theme from '../themes/_theme_three.scss';
import { Chat } from '../components';

import './demopageStyle.scss';

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeWindow: false,
    };
  }

  componentDidUpdate() {
    const { close, closeWindow } = this.state;
    if (closeWindow) {
      this.resetCloseState();
      close(closeWindow);
    }
  }

  resetCloseState = () => {
    this.setState({
      closeWindow: false,
    });
  };

  handleClose = ({ close }) => {
    console.log('redux actions dispatch or any conditional task..');
    this.setState({
      close,
    });
    setTimeout(
      () => this.setState({
        closeWindow: true,
      }),
      2000,
    );
  };

  render() {
    return (
      <div className="demo-home">
        <DemoPageNavbar />
        <div className="demo-page-intro">
          <div className="demo-intro animated fadeInUp">
            <h2>
A reusable React Chat App module.
            </h2>
            <p>
              Click on the chat icon at the bottom right of the page and select
              any user to start a demo chat!
            </p>
          </div>
        </div>
        <Chat onWindowClose={this.handleClose} theme={theme} {...this.props} />
      </div>
    );
  }
}

export default DemoPage;
