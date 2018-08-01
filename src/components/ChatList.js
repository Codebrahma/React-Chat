import React from 'react'
import PropTypes from 'prop-types'
import ChatListItem from './ChatListItem'
import defaultTheme from '../themes/_default_theme.scss'
import { themr } from 'react-css-themr';

const ChatList = (props) => {
    const { theme } = props;
    let filteredUserData = props.filteredUserData || props.userData.filter((user) => user.name.toLowerCase().includes(props.searchedFor.toLowerCase()))
    return (
    <div className={theme.userlist}>
      {
        filteredUserData.length === 0
          ? <span>No User Found</span>
          : filteredUserData.map(item => (
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
}

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

export default themr('ThemedChatList', defaultTheme, { composeTheme : "softly" })(ChatList)
