import React, { Component } from 'react'
import {userData} from '../data'
import {
    ChatListProvider,
    ChatListHeader,
    ChatList,
    ChatListSearch,
  } from '../components/index'
import ChatListHeader1 from './exampleChat1/ChatListHeader1'

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
          <ChatListSearch />
          <ChatList />
        </ChatListProvider>
      </div>
    )
  }
}

export default Home
