import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindowSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }


  onSend = (e) => {
    const { message } = this.state;
    const { myData, handleMessages } = this.props;
    e.preventDefault();
    if (message.trim() !== '') {
      handleMessages({ message, userId: myData.id });
    }
    this.setState(() => ({
      message: '',
    }));
  }

  handleInputMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const { theme } = this.props;
    const { message } = this.state;
    return (
      <div className={theme.chatSendInput}>
        <form onSubmit={this.onSend}>
          <input
            className={theme.messageInput}
            type="text"
            placeholder="Your message..."
            onChange={this.handleInputMessage}
            value={message}
          />
          <button type="submit">
            <i className="fas fa-arrow-alt-circle-right" />
          </button>
        </form>
      </div>
    );
  }
}

ChatWindowSend.propTypes = {
  handleMessages: PropTypes.func.isRequired,
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
};


export default ChatWindowSend;
