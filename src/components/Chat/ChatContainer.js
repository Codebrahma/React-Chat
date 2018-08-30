import React, { Component } from 'react';
import Proptypes from 'prop-types';
import ChatProvider from '../ChatList/ChatProvider';
import ChatWindowBox from '../ChatWindow/ChatWindowBox';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatUserId: '',
    };
  }

  updateWindow = (chatUserId) => {
    const { handleItemCallback } = this.props;
    const tobeUpdated = handleItemCallback(chatUserId);
    if (tobeUpdated) {
      this.setState({
        chatUserId,
      });
    }
  };

  render() {
    const { userData } = this.props;
    const { chatUserId } = this.state;
    return (
      <div>
        <ChatProvider
          updateChatWindow={this.updateWindow}
          userData={userData}
        />
        {chatUserId && <ChatWindowBox userId={chatUserId} {...this.props} />}
      </div>
    );
  }
}

Chat.propTypes = {
  userData: Proptypes.arrayOf(Proptypes.object).isRequired,
  handleItemCallback: Proptypes.func,
};

Chat.defaultProps = {
  handleItemCallback: () => true,
};

export default Chat;
