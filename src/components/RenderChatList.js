import React from 'react'
import PropTypes from 'prop-types'
import { ChatListItem } from './index'

const RenderChatList = ({userData}) => (
    <div className="chat-list">
      {
        userData.map(item => (
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

RenderChatList.propTypes = {
  userData: PropTypes.array.isRequired,
}

RenderChatList.defaultProps = {
  userData: [],
}

export default RenderChatList
