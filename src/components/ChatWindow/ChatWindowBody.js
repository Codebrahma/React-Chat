import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';

class ChatWindowBody extends Component {
  componentDidUpdate(nextProps) {
    const { chatUserId } = this.props;
    const lastMessageIndex = nextProps.messages.length;
    const messageContainer = document.getElementById(`window-${chatUserId.id}`);
    const lastMessageElement = document.getElementById(`m-${chatUserId.id}-${lastMessageIndex}`);

    if (lastMessageElement !== null) {
      const lastMessageTop = lastMessageElement.offsetTop;
      messageContainer.scrollTop = lastMessageTop - 40;
    }
  }

  render() {
    const {
      theme, messages, chatUserId,
    } = this.props;
    return (
      <div className={theme.chatWindowBody} id={`window-${chatUserId.id}`}>
        {
          messages.map((message, index) => (
            <div key={`${chatUserId.id}${index + 1}`} id={`m-${chatUserId.id}-${index + 1}`} className={`${chatUserId.id === message.userId ? theme.sent : theme.recieved} ${theme.message} animated zoomIn`}>
              {message.message}
            </div>
          ))
        }
      </div>
    );
  }
}

ChatWindowBody.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  chatUserId: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default themr('ThemedChatWindowBody', defaultTheme, { composeTheme: 'softly' })(ChatWindowBody);
