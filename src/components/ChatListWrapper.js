import React from 'react'
import PropTypes from 'prop-types'
import {
    ChatListHeader,
    ChatList,
    ChatSearch,
    ChatListItem
  } from './index.js'

const ChatListWrapper = (props) => {
  return (
    <div className="chat-list-container">
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
                          customHeader={props.customHeader}
                          userData={props.userData}
                        />
                      )
                }
                { props.customList
                    ? <props.customList userData={props.userData} />
                    : ( <ChatList
                          customList={props.customList}
                          userData={props.userData}
                        />
                    )
                }
                {
                  props.customSearch
                    ? <props.customSearch handleSearchChange={props.handleSearchChange}/>
                    : ( <ChatSearch
                          customSearch={props.customSearch}
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

ChatListWrapper.propTypes = {
  customHeader: PropTypes.func.isRequired,
  customList: PropTypes.func.isRequired,
  customSearch: PropTypes.func.isRequired,
  userData: PropTypes.array.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
}

export default ChatListWrapper
