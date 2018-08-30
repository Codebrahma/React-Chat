import React, { Component } from 'react';
import Proptypes from 'prop-types';
import ChatListProvider from '../ChatList/ChatListProvider';
import ChatWindowBox from '../ChatWindow/ChatWindowBox';
import theme from '../../themes/_theme_two.scss';

class ChatProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatUserId: [],
    };
  }

  updateWindow = (chatId) => {
    this.setState(({ chatUserId }) => ({
      chatUserId: [...chatUserId, chatId],
    }));
  };

  render() {
    const { userData } = this.props;
    const { chatUserId } = this.state;
    return (
      <div>
        <ChatListProvider
          updateChatWindow={this.updateWindow}
          userData={userData}
          theme={theme}
        />
        {chatUserId.map(chatId => <ChatWindowBox userId={chatId} {...this.props} />)}
      </div>
    );
  }
}

ChatProvider.propTypes = {
  userData: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default ChatProvider;
