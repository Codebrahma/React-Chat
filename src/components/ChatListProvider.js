import React from 'react'
import PropTypes from 'prop-types'
import {
    ChatListHeader,
    ChatList,
    ChatSearch,
    ChatListItem,
  } from './index.js'
import classNames from 'classnames'

const ChatListProvider = (props) => {
  console.log(props.children)
  return (
    <div className={props.wrapperClass}>
      {
        props.children
          ? (
              props.children.map((child, index) => React.cloneElement(child, {...props, key: index}))
            )
          : (
              <div>
                { props.customHeader
                    ? <props.customHeader userData={props.userData} />
                    : ( <ChatListHeader
                          userData={props.userData}
                        />
                      )
                }
                { props.customList
                    ? <props.customList userData={props.userData} />
                    : ( <ChatList
                          userData={props.userData}
                        />
                    )
                }
                {
                  props.customSearch
                    ? <props.customSearch handleSearchChange={props.handleSearchChange}/>
                    : ( <ChatSearch
                          handleSearchChange={props.handleSearchChange}
                        />
                    )
                }
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
  wrapperClass: PropTypes.string,
}

ChatListProvider.defaultProps = {
  wrapperClass: "chat-list-wrapper",
}

export default ChatListProvider
