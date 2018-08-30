import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { themr } from 'react-css-themr';
import ChatListProvider from '../ChatList/ChatListProvider';
import theme from '../../themes/_theme_two.scss';
import defaultTheme from '../../themes/_default_theme.scss';
import ChatWindowProvider from '../ChatWindow/ChatWindowProvider';

const WINDOW_LIMIT = 2;

class ChatProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatUserId: [],
    };
  }

  updateWindow = (chatId) => {
    this.setState(({ chatUserId }) => {
      if ([...new Set([...chatUserId, chatId])].length === WINDOW_LIMIT + 1) {
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
    const { onWindowClose } = this.props;
    onWindowClose({
      close: (flag) => {
        if (flag) {
          this.setState(({ chatUserId }) => ({
            chatUserId: chatUserId.filter(userid => userid !== id),
          }));
        }
      },
    });
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
  onWindowClose: Proptypes.func,
};

ChatProvider.defaultProps = {
  onWindowClose: ({ close }) => { close(true); },
};

export default themr('ThemedChatProvider', defaultTheme, { composeTheme: 'softly' })(ChatProvider);
