import React from 'react'
import Icon from '../Icon'

const ChatListItem1 = (props) => {
  const {lastSeen} = props
  const lastSeenTime = new Date() - lastSeen
  const lastSeenMinutes = Math.ceil(lastSeenTime / (1000*60))
  const lastSeenHours = Math.floor(lastSeenMinutes / 60)
  const lastSeenDays = Math.floor(lastSeenHours / 24)
  return (
    <div className="example-item1">
      <img src={props.avatar} className="example-avatar1" alt={props.name.slice(0,1).toUpperCase()}/>
      {<span className={"online-1"}></span>}
      <span className="example-name1">{props.name}</span>
  </div>
)
}


export default ChatListItem1
