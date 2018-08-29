import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatWindowProvider from './ChatWindowProvider';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: '',
    };
  }

  render() {
    const { inputMessage } = this.state;
    return (
      <ChatWindowProvider
        onSend={this.onSend}
        inputValue={inputMessage}
        {...this.props}
      />
    );
  }
}

ChatWindow.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ChatWindow;
