import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChatInput = styled.div`
box-shadow: 0 -5px 16px -5px $input-box-shadow;
    height: 35px;
    padding: 2%;
    form {
        display: flex;
        height: 100%;
        padding: 0;
        align-items: center;
        justify-content: space-between;
        font-size: 1em;
        button {
            background: none;
            border: 0;
            color: $chat-header;
            cursor: pointer;
            i {
                font-size: 16px;
            }
        }
        .emoji-button {
            margin: 0% 1% 0% 2%;
        }
    }
`;

const MessageInput = styled.input`
font-size: 0.85em;
    border: none;
    outline: none;
    padding: 2% 5%;
    height: 70%;
    width: 100%
`;

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
          <button type="submit">
            <i className="fas fa-arrow-alt-circle-right" />
          </button>
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
