import React, { Component } from 'react'
import {userData} from '../data'
import {
    ChatList,
    ChatListProvider,
    ChatListHeader,
    ChatSearch,
    RenderChatHeader,
    RenderChatList,
    RenderChatSearch,
  } from '../components/index'
import RenderChatHeader1 from './exampleChat1/RenderChatHeader1'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchedFor: '',
    }
  }

  handleSearchChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchedFor: e.target.value,
    })
  }
  render() {
    return (
      <div className="home">
        <ChatListProvider
          userData={userData}
          handleSearchChange={this.handleSearchChange}
        >
          <ChatListHeader />
          <ChatList />
          <ChatSearch />
        </ChatListProvider>
      </div>
    )
  }
}

export default Home
