import React, { Component } from 'react'
import {userData} from '../data'
import {
    ChatList,
    ChatListWrapper,
    ChatListHeader,
    ChatSearch,
    RenderChatHeader,
    RenderChatList,
    RenderChatSearch,
  } from '../components/index'

const Dummy = () => (
  <div>
    DummyyData
  </div>
)

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
        <ChatListWrapper
          userData={userData}
          customHeader={RenderChatHeader}
          customList={RenderChatList}
          customSearch={RenderChatSearch}
          handleSearchChange={this.handleSearchChange}
        >
          <ChatListHeader />
          <ChatList />
          <ChatSearch />
        </ChatListWrapper>
      </div>
    )
  }
}

export default Home
