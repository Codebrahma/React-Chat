import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageInput from '../customcomponents/MessageInput';
import SendButton from '../customcomponents/SendButton';
import ChatInput from '../customcomponents/ChatInputWrapper';

class ChatWindowSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }


  onSend = (e) => {
    const { message } = this.state;
    const { myData, handleMessages } = this.props;
    e.preventDefault();
    if (message.trim() !== '') {
      handleMessages({ message, userId: myData.id });
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
    const { message } = this.state;
    return (
      <ChatInput>
        <form onSubmit={this.onSend}>
          <MessageInput
            type="text"
            placeholder="Your message..."
            onChange={this.handleInputMessage}
            value={message}
          />
          <SendButton type="submit">
            <i className="fas fa-arrow-alt-circle-right" />
          </SendButton>
        </form>
      </ChatInput>
    );
  }
}

ChatWindowSend.propTypes = {
  handleMessages: PropTypes.func.isRequired,
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
};


export default ChatWindowSend;
