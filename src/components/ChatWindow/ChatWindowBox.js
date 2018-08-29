import React, { Component } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import ChatWindow from './ChatWindow';

const WindowBox = styled.div`
  display: flex;
  width: fit-content;
  position: fixed;
  left: 0.5em;
  bottom: 0.5em;
  z-index: 1000;
  justify-content: space-between;
`;

class ChatWindowBox extends Component {
  constructor(props) {
    super(props);
    const { userId } = props;
    this.state = {
      messages: [],
      currentUserId: userId,
      self: true,
      other: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentUserId } = this.state;
    if (currentUserId !== nextProps.userId) {
      this.setState({
        messages: [],
        self: true,
        other: true,
      });
    }
  }

  handleMessages = ({ userId, message }) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, { userId, message }],
    }));
  };

  handleChatBoxClose = (win) => {
    if (win === '1') {
      this.setState({
        self: false,
        other: false,
      });
    } else {
      this.setState({
        other: false,
      });
    }
  };

  render() {
    const { self, messages, other } = this.state;
    const { myData, userData, userId } = this.props;
    return (
      <WindowBox>
        {self && (
        <ChatWindow
          handleMessages={this.handleMessages}
          myData={myData}
          userData={userData.find(user => user.id === userId)}
          messages={messages}
          handleCloseClick={() => this.handleChatBoxClose('1')}
        />
        )}
        {other && (
        <ChatWindow
          handleMessages={this.handleMessages}
          userData={myData}
          myData={userData.find(user => user.id === userId)}
          messages={messages}
          handleCloseClick={() => this.handleChatBoxClose('2')}
        />
        )}
      </WindowBox>
    );
  }
}

ChatWindowBox.propTypes = {
  userId: PropType.number.isRequired,
  userData: PropType.oneOfType([PropType.array]).isRequired,
  myData: PropType.oneOfType([PropType.object]).isRequired,
};

export default ChatWindowBox;
