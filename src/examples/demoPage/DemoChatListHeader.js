import React from 'react';

const DemoChatWindowHeader = (props) => {
    return (
        <div className="demo-chat-window-header">
            Chat list header : {props.userId}
        </div>
    )
}

export default DemoChatWindowHeader;