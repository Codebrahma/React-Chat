import React from 'react';
import Icon from '../Icon';

const DemoChatListItem = (props) => {
    return (
        <span className="demo-chat-list-item" onClick={() => props.handleChatItemClick(props.id)}>
            <Icon />
            <span>
                Lorem ipsum dolor sit emet
            </span>
        </span>
    )
}

export default DemoChatListItem;