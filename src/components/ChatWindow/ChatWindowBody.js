import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';

class ChatWindowBody extends Component {
  componentDidUpdate(nextProps) {
    const { userData } = this.props;
    const lastMessageIndex = nextProps.messages.length;
    const messageContainer = document.getElementById(`window-${userData.id}`);
    const lastMessageElement = document.getElementById(`m-${userData.id}-${lastMessageIndex}`);

    if (lastMessageElement !== null) {
      const lastMessageTop = lastMessageElement.offsetTop;
      messageContainer.scrollTop = lastMessageTop - 40;
    }
  }

  render() {
    const { theme, messages, userData } = this.props;
    return (
      <div className={theme.chatWindowBody} id={`window-${userData.id}`}>
        {
          messages.map((message, index) => (
            <div key={`${userData.id}${index + 1}`} id={`m-${userData.id}-${index + 1}`} className={`${userData.id === message.userId ? theme.sent : theme.recieved} ${theme.message} animated zoomIn`}>
              {message.message}
            </div>
          ))
        }
      </div>
    );
  }
}

ChatWindowBody.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default themr('ThemedChatWindowBody', defaultTheme, { composeTheme: 'softly' })(ChatWindowBody);
