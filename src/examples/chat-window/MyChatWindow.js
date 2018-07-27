import React from 'react'
import ChatListProvider from '../../components/ChatListProvider'
import ChatWindowHeader from './ChatWindowHeader'
import ChatWindowBody from './ChatWindowBody'
import ChatWindowSend from './ChatWindowSend'

const MyChatWindow = (props) => {
  return (
    <ChatListProvider
      chatProviderClass="chat-window-container"
      myData={props.myData}
      userData={props.userData}
      handleInputMessage={props.handleInputMessage}
      onSend={props.onSend}
      inputValue={props.inputValue}
    >
      <ChatWindowHeader />
      <ChatWindowBody />
      <ChatWindowSend />
    </ChatListProvider>
  )
}


export default MyChatWindow
