import React, { Component } from 'react';
import PropType from 'prop-types';
import ChatWindow from './ChatWindow';

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
  }

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
  }

  render() {
    const { self, messages, other } = this.state;
    const { myData, userData, userId } = this.props;
    return (
      <div className="demo-chat-window-box">
        {self && (
        <div className="demo-chat-window self">
          <ChatWindow
            handleMessages={this.handleMessages}
            myData={myData}
            userData={userData.find(user => user.id === userId)}
            messages={messages}
            handleCloseClick={() => this.handleChatBoxClose('1')}
          />
        </div>
        )}
        {other && (
        <div className="demo-chat-window other">
          <ChatWindow
            handleMessages={this.handleMessages}
            userData={myData}
            myData={userData.find(user => user.id === userId)}
            messages={messages}
            handleCloseClick={() => this.handleChatBoxClose('2')}
          />
        </div>
        )}
      </div>
    );
  }
}

ChatWindowBox.propTypes = {
  userId: PropType.number.isRequired,
  userData: PropType.oneOfType([PropType.array]).isRequired,
  myData: PropType.oneOfType([PropType.object]).isRequired,
};

export default ChatWindowBox;
