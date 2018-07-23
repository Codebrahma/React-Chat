import React, { Component } from 'react'
import ChatListItem from './ChatListItem'
import {chatListData} from '../data'

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchChat: '',
    }
  }

  renderChatUsersList = () => (
    <div className="chat-list">
      {
        chatListData.map(item => (
          <ChatListItem
            key={item.id}
            id={item.id}
            avatar={item.avatar}
            name={item.name}
            onlineStatus={item.onlineStatus}
            lastSeen={item.lastSeen}
          />
        ))
      }
    </div>
  )

  renderChatSearch = () => (
    <input
      className="search-user-input"
      type="text" value={this.state.searchChat}
      placeholder="Search users..."
      onChange={this.handleChange}
    />
  )

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      searchChat: e.target.value,
    })
  }

  render() {
    return (
      <div className={"chat-list-container"}>
        <div className="active-users">
          <p>Active Users ({chatListData.filter(data => data.onlineStatus==="online").length})</p>
        </div>
        {this.renderChatUsersList()}
        <div className="search-user">
          {this.renderChatSearch()}
        </div>
      </div>
    )
  }
}

export default ChatList
