import React, { Component } from 'react'
import { userData } from '../data'
import {
    ChatListProvider,
    ChatListHeader,
    ChatList,
    ChatListSearch,
  } from '../components/index'
import ChatListHeader1 from './exampleChat1/ChatListHeader1'
import ChatList1 from './exampleChat1/ChatList1'
import ChatListItem1 from './exampleChat1/ChatListItem1'
import ChatListSearch1 from './exampleChat1/ChatListSearch1'
import ChatWindowHeader from './chat-window/ChatWindowHeader'
import WindowIndex from './chat-window/index'
  ChatListProvider,
  // ChatListHeader,
  ChatList,
  ChatListSearch,
} from '../components'
// import ChatListHeader1 from './exampleChat1/ChatListHeader1'
// import ChatList1 from './exampleChat1/ChatList1'
// import ChatListItem1 from './exampleChat1/ChatListItem1'
// import ChatListSearch1 from './exampleChat1/ChatListSearch1'

import ExampleChat2 from './exampleChat2';
// Import demo page for chat themes
import DemoPage from './demoPage';

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
        <WindowIndex userData={userData}/>
      </div>
      <DemoPage />

      // <ExampleChat2 />

      // <ChatListProvider
      //   userData={userData}
      // />
      // <div className="home">
      //   {/* <ChatListProvider
      //     userData={userData}
      //     chatProviderClass="example-provider1"
      //     handleSearchChange={this.handleSearchChange}
      //   >
      //   <ChatListHeader1 />
      //   <ChatList
      //     customChatListItem={ChatListItem1}
      //     chatListClass="example-list1"
      //   />
      //   </ChatListProvider> */}
      // </div>
    )
  }
}

export default Home
