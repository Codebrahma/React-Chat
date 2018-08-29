import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from '../customcomponents/Message';

const WindowBody = styled.div`
height: ${({ height }) => height || '40vh'};
padding: 5px 10px;
overflow-y: scroll;
.animated {
    animation-duration: 0.1s;
}
&::-webkit-scrollbar {
    width: 8px;
}
&::-webkit-scrollbar-track {
    background: $chat-head-text;
}
&::-webkit-scrollbar-thumb {
    background: $scroll-bg;
    border-radius: 5px;
}
`;

const style = {
  sent: {
    float: 'right',
  },
  recieved: {
    float: 'left',
  },
};

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
    const { messages, myData } = this.props;
    return (
      <WindowBody id={`window-${myData.id}`}>
        {
          messages.map((message, index) => (
            <Message key={`${myData.id}${index + 1}`} id={`m-${myData.id}-${index + 1}`} style={myData.id === message.userId ? style.sent : style.recieved}>
              {message.message}
            </Message>
          ))
        }
      </WindowBody>
    );
  }
}

ChatWindowBody.propTypes = {
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatWindowBody;
