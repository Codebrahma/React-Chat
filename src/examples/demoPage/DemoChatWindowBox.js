import React, { Component } from 'react';
import { ChatListProvider, ChatList, ChatListSearch } from '../../components';
import DemoChatWindowHeader from './DemoChatListHeader';
import WindowIndex from '../chat-window'
import MyChatWindow from '../chat-window/MyChatWindow'
import ExampleChat1 from '../exampleChat1'


class DemoChatWindowBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      currentUserId: this.props.userId,
      self: true,
      other: true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.currentUserId !== nextProps.userId
      ? this.setState((prevState) => ({
        messages: [],
        self: true,
        other: true
      }))
      : null
  }


  handleMessages = ({ userId, message }) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, { userId, message }]
    }))
  }

  handleChatBoxClose = (win) => {
    if (win === '1') {
      this.setState({
        self: false,
        other: false
      })
    } else {
      this.setState({
        other: false
      })
    }
  }

  render() {
    return (
      <div className="demo-chat-window-box">
        {this.state.self && <div className="demo-chat-window self">
          <WindowIndex
            handleMessages={this.handleMessages}
            myData={this.props.myData}
            userData={this.props.userData.find((user) => user.id === this.props.userId)}
            messages={this.state.messages}
            handleCloseClick={() => this.handleChatBoxClose('1')}
          />
        </div>}
        {this.state.other && <div className="demo-chat-window other">
          <WindowIndex
            handleMessages={this.handleMessages}
            userData={this.props.myData}
            myData={this.props.userData.find((user) => user.id === this.props.userId)}
            messages={this.state.messages}
            handleCloseClick={() => this.handleChatBoxClose('2')}
          />
        </div>}
      </div>
    )
  }
}

export default DemoChatWindowBox;
