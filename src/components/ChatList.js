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
          <p>Active Users ({chatListData.filter(data => data.status==="active").length})</p>
        </div>
        <div className="chat-list">
          {
            chatListData.map(item => (
              <ChatListItem
                key={item.id}
                id={item.id}
                avatar={item.avatar}
                name={item.name}
                status={item.status}
              />
            ))
          }
        </div>
        <div className="search-user">
          <input
            className="search-user-input"
            type="text" value={this.state.searchChat}
            placeholder="Search users..."
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default ChatList
