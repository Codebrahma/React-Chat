import React from 'react';
import Icon from '../Icon';


const DemoChatButton = (props) => {

    const handleClick = () => {
        props.handleChatListProvider();
    }

    return (
        <div className="chat-popup-button" onClick={handleClick}>
            <Icon iconClass="fa-comment" />
        </div>
    )
}

export default DemoChatButton;
