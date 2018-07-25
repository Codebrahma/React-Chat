import React from 'react'
import PropTypes from 'prop-types'
import {
    ChatListItem,
  } from './index.js'
import ChatListHeader from './ChatListHeader'
import ChatList from './ChatList'
import ChatListSearch from './ChatListSearch'
import classNames from 'classnames'

const ChatListProvider = (props) => {
  return (
    <div className={props.chatProviderClass}>
      {
        props.children
          ? ( props.children instanceof Array
                ?  props.children.map((child, index) => React.cloneElement(child, {...props, key: index}))
                :  React.cloneElement(props.children, {...props})
            )
          : (
              <div>
                <props.customHeader userData={props.userData} />
                <props.customList userData={props.userData} />
                <props.customSearch handleSearchChange={props.handleSearchChange}/>
              </div>
            )
      }
    </div>
  )
}

ChatListProvider.propTypes = {
  customHeader: PropTypes.func,
  customList: PropTypes.func,
  customSearch: PropTypes.func,
  userData: PropTypes.array.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  chatProviderClass: PropTypes.string,
}

ChatListProvider.defaultProps = {
  chatProviderClass: "chat-list-wrapper",
  customHeader: ChatListHeader,
  customList: ChatList,
  customSearch: ChatListSearch,
}

export default ChatListProvider
