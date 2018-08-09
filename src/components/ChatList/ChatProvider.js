import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatListProvider from './ChatListProvider';
import ChatButton from './ChatListButton';

const containerstyle = {
  position: 'fixed',
  bottom: '0.5em',
  right: '0.5em',
};

class ChatProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

    handleChatProvider = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }));
    }

    render() {
      const { userData, updateChatWindow, noButton } = this.props;
      const { open } = this.state;
      const ChatListWOButton = () => (
        <ChatListProvider
          userData={userData}
          handleChatItemClick={id => updateChatWindow(id)}
        />
      );
      const ChatListWButton = () => (
        <div>
          {
                    open
                    && (
                    <ChatListProvider
                      userData={userData}
                      handleChatItemClick={id => updateChatWindow(id)}
                    />
                    )
                }
          <ChatButton iconClass={open ? 'fas fa-times' : 'far fa-comment'} handleChatListProvider={this.handleChatProvider} />
        </div>
      );
      const ChatListDisplay = noButton ? ChatListWOButton : ChatListWButton;
      return (
        <div style={containerstyle}>
          <ChatListDisplay />
        </div>
      );
    }
}

ChatProvider.propTypes = {
  noButton: PropTypes.bool,
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  updateChatWindow: PropTypes.func.isRequired,
};

ChatProvider.defaultProps = {
  noButton: false,
};

export default ChatProvider;
