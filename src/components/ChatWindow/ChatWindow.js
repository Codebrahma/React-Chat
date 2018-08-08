import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import ChatWindowProvider from './ChatWindowProvider';
import defaultTheme from '../../themes/_default_theme.scss';


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

export default themr('ThemedChatWindow', defaultTheme, { composeTheme: 'softly' })(ChatWindow);
