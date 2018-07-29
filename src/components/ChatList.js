import React from 'react'
import PropTypes from 'prop-types'
import ChatListItem from './ChatListItem'

const ChatList = (props) => (
    <div className={props.chatListClass}>
      {
        props.userData.length === 0
          ? <span className='no-user-found'>No User Found</span>
          : props.userData.map(item => (
              <props.customChatListItem
                key={item.id}
                id={item.id}
                avatar={item.avatar}
                name={item.name}
                onlineStatus={item.onlineStatus}
                lastSeen={item.lastSeen}
                {...props}
                {...item}
              />
            ))
      }
    </div>
  )

ChatList.propTypes = {
  userData: PropTypes.array.isRequired,
  customChatListItem: PropTypes.func,
  chatListClass: PropTypes.string,
}

ChatList.defaultProps = {
  userData: [],
  customChatListItem: ChatListItem,
  chatListClass: "user-list",
}

export default ChatList
