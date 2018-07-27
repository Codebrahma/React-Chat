import React from 'react';
import Icon from '../Icon';


const DemoChatButton = (props) => {

    function handleClick() {
        props.handleChatListProvider();
    }

    return (
        <div className="chat-popup-button" onClick={handleClick}>
            <Icon iconClass={props.iconClass} />
        </div>
    )
}

export default DemoChatButton;