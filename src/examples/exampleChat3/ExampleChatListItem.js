import React from 'react';

const ExampleChatListItem = (props) => {
    const { lastSeen } = props
    const lastSeenTime = new Date() - lastSeen
    const lastSeenMinutes = Math.ceil(lastSeenTime / (1000 * 60))
    const lastSeenHours = Math.floor(lastSeenMinutes / 60)
    const lastSeenDays = Math.floor(lastSeenHours / 24)

    return (
        <div id={props.id} className="chat-list-item-theme" onClick={() => props.handleChatItemClick(props.id)}>
            <img src={props.avatar} className="user-list-avatar-theme" alt={props.name.slice(0, 1).toUpperCase()} />
            <div className="user-list-item-theme">
                <p className="user-list-name-theme">{props.name}</p>
                <p className="user-list-message-theme">{props.previewMessage}</p>
            </div>
            <span className={props.onlineStatus}>
                {props.onlineStatus === "offline" && (
                    lastSeenDays > 0
                        ? `${lastSeenDays}d`
                        : lastSeenHours > 0
                            ? `${lastSeenHours}h`
                            : lastSeenMinutes > 0
                                ? `${lastSeenMinutes}m`
                                : ''
                )
                }
            </span>
        </div>
    )
}

export default ExampleChatListItem;