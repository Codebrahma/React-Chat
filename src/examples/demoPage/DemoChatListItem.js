import React from 'react';

const DemoChatListItem = (props) => {
    return (
        <span className="demo-chat-list-item" onClick={() => props.handleChatItemClick(props.id)}>
            <span className="demo-chat-list">
                Lorem ipsum dolor sit emet
            </span>
        </span>
    )
}

export default DemoChatListItem;