import React from 'react'
import PropTypes from 'prop-types'
import {ChatListProvider,ChatList,ChatListSearch} from '../../components'
import ChatListHeader1 from './ChatListHeader1'
import ChatListItem1 from './ChatListItem1'

const ExampleChat1 = (props) => (
  <ChatListProvider
    chatProviderClass="example-provider1"
    userData={props.userData}
    {...props}
  >
    <ChatListHeader1 />
    <ChatList
      customChatListItem={ChatListItem1}
      chatListClass="example-list1"
    />
    <ChatListSearch />
  </ChatListProvider>
)

ExampleChat1.propTypes = {
  userData: PropTypes.array.isRequired,
}

export default ExampleChat1
