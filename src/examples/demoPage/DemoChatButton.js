import React from 'react';


const DemoChatButton = (props) => {

    const handleClick = () => {
        props.handleChatListProvider();
    }

    return (
        <div className="chat-popup-button" onClick={handleClick}>
            <i className={props.iconClass} />
        </div>
    )
}

export default DemoChatButton;
