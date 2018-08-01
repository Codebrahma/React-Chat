import React from 'react'

const ChatListItem1 = (props) => {
  const {lastSeen} = props
  const lastSeenTime = new Date() - lastSeen
  const lastSeenMinutes = Math.ceil(lastSeenTime / (1000*60))
  const lastSeenHours = Math.floor(lastSeenMinutes / 60)
  const lastSeenDays = Math.floor(lastSeenHours / 24)

  return (
    <div className="example-item1">
      <img src={props.avatar} className="example-avatar1" alt={props.name.slice(0,1).toUpperCase()}/>
      <span className={`${props.onlineStatus}-1`}></span>
      <div className="example-item-body1">
        <span className="example-name1">{props.name}</span>
        <span className="example-preview1">{props.previewMessage}</span>
      </div>
      <span className="example-time1">{`${lastSeen.getHours()}:${lastSeen.getMinutes()}`}</span>
  </div>
)
}


export default ChatListItem1
