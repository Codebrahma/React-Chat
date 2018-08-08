import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindowBody extends Component {
  componentDidUpdate(nextProps) {
    const { myData } = this.props;
    const lastMessageIndex = nextProps.messages.length;
    const messageContainer = document.getElementById(`window-${myData.id}`);
    const lastMessageElement = document.getElementById(`m-${myData.id}-${lastMessageIndex}`);

    if (lastMessageElement !== null) {
      const lastMessageTop = lastMessageElement.offsetTop;
      messageContainer.scrollTop = lastMessageTop - 40;
    }
  }

  render() {
    const { messages, myData, chatBodyClass } = this.props;
    return (
      <div className={chatBodyClass} id={`window-${myData.id}`}>
        {
          messages.map((message, index) => (
            <div id={`m-${myData.id}-${index + 1}`} className={`${myData.id === message.userId ? 'sent' : 'received'} message animated zoomIn`}>
              {message.message}
            </div>
          ))
        }
      </div>
    );
  }
}

ChatWindowBody.propTypes = {
  chatBodyClass: PropTypes.string,
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ChatWindowBody.defaultProps = {
  chatBodyClass: 'chat-window-body',
};

export default ChatWindowBody;
