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
    <div className={`${props.chatProviderClass} chat-list-wrapper`}>
      {
        props.children
          ? ( Array.isArray(props.children)
                ?  props.children.map((child, index) => React.cloneElement(child, {...props, key: index}))
                :  React.cloneElement(props.children, {...props})
            )
          : (
              <div>
                <props.customHeader userData={props.userData} />
                <props.customList userData={props.userData} {...props}/>
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
  userData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  handleSearchChange: PropTypes.func,
  chatProviderClass: PropTypes.string,
}

ChatListProvider.defaultProps = {
  customHeader: ChatListHeader,
  customList: ChatList,
  customSearch: ChatListSearch,
}

export default ChatListProvider
