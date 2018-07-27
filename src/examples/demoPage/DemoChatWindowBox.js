import React,{Component} from 'react';
import { ChatListProvider, ChatList, ChatListSearch } from '../../components';
import DemoChatWindowHeader from './DemoChatListHeader';
import WindowIndex from '../chat-window'
import ExampleChat1 from '../exampleChat1'


class DemoChatWindowBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      currentUserId: this.props.userId,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.currentUserId !== nextProps.userId
      && this.setState((prevState) => ({
          messages: []
        }))
  }

  handleMessages = ({userId, message}) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, {userId,message}]
    }))
  }


  render() {
    return (
      <div className="demo-chat-window-box">
        <div className="demo-chat-window">
          <WindowIndex
              handleMessages={this.handleMessages}
              myData={this.props.myData}
              userData={this.props.userData.find((user) => user.id === this.props.userId)}
              messages={this.state.messages}
          />
        </div>
        <div className="demo-chat-window">
          <WindowIndex
              handleMessages={this.handleMessages}
              userData={this.props.myData}
              myData={this.props.userData.find((user) => user.id === this.props.userId)}
              messages={this.state.messages}
          />
        </div>
      </div>
    )
  }
}

export default DemoChatWindowBox;
