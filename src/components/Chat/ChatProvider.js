import React, { Component } from 'react';
import Proptypes from 'prop-types';
import ChatListProvider from '../ChatList/ChatListProvider';
import theme from '../../themes/_theme_two.scss';
import ChatWindowProvider from '../ChatWindow/ChatWindowProvider';

class ChatProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatUserId: [],
    };
  }

  updateWindow = (chatId) => {
    this.setState(({ chatUserId }) => {
      if ([...new Set([...chatUserId, chatId])].length === 4) {
        return {
          chatUserId: [...chatUserId.splice(1), chatId],
        };
      }
      return {
        chatUserId: [...new Set([...chatUserId, chatId])],
      };
    });
  };

  handleChatBoxClose = (id) => {
    this.setState(({ chatUserId }) => ({
      chatUserId: chatUserId.filter(userid => userid !== id),
    }));
  };

  render() {
    const { chatUserId } = this.state;
    const { userData } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 0,
          bottom: 0,
        }}
      >
        {chatUserId.map(chatId => (
          <div
            style={{ padding: '0 1%' }}
            key={chatId}
          >
            <ChatWindowProvider
              theme={theme}
              userData={userData.filter(user => chatId === user.id)[0]}
              myData={{ id: 0 }}
              handleCloseClick={this.handleChatBoxClose}
            />
          </div>
        ))}

        <ChatListProvider
          noButton
          updateChatWindow={this.updateWindow}
          userData={userData}
          theme={theme}
        />
      </div>
    );
  }
}

ChatProvider.propTypes = {
  userData: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default ChatProvider;
