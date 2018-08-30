import React, { Component } from 'react';
import PropType from 'prop-types';
import theme from '../../themes/_theme_two.scss';
// import theme from '../../themes/_theme_three.scss';
import ChatWindowProvider from './ChatWindowProvider';

class ChatWindowBox extends Component {
  constructor(props) {
    super(props);
    const { userId } = props;
    this.state = {
      messages: [],
      currentUserId: userId,
      other: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentUserId } = this.state;
    if (currentUserId !== nextProps.userId) {
      this.setState({
        messages: [],
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
        other: false,
      });
    } else {
      this.setState({
        other: false,
      });
    }
  }

  render() {
    const { messages, other } = this.state;
    const { myData, userData, userId } = this.props;
    return (
      <div className="demo-chat-window-box">
        {other && (
          <ChatWindowProvider
            theme={theme}
            handleMessages={this.handleMessages}
            userData={myData}
            myData={userData.find(user => user.id === userId)}
            messages={messages}
            handleCloseClick={() => this.handleChatBoxClose('2')}
          />
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
