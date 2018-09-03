import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';

class ChatWindowSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }


  onSend = (e) => {
    const { message } = this.state;
    const { chatUserId, handleMessages } = this.props;
    e.preventDefault();
    if (message.trim() !== '') {
      handleMessages({ message, userId: chatUserId.id });
    }
    this.setState(() => ({
      message: '',
    }));
  }

  handleInputMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const { theme } = this.props;
    const { message } = this.state;
    return (
      <div className={theme.chatSendInput}>
        <form onSubmit={this.onSend}>
          <input
            className={theme.messageInput}
            type="text"
            placeholder="Your message..."
            onChange={this.handleInputMessage}
            value={message}
          />
          <button type="submit">
            <i className="fas fa-arrow-alt-circle-right" />
          </button>
        </form>
      </div>
    );
  }
}

ChatWindowSend.propTypes = {
  handleMessages: PropTypes.func.isRequired,
  chatUserId: PropTypes.oneOfType([PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
};


export default themr('ThemedChatWindowSend', defaultTheme, { composeTheme: 'softly' })(ChatWindowSend);
