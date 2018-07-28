import React from 'react';

const ExampleChatListHeader = (props) => {
    return (
        <div className="chat-header-theme">
            <span className="chat-header-menu-icon">
                <i className="fas fa-bars" style={{ color: 'white', background: 'inherit' }}></i>
            </span>
            <span>
                Chat ( {props.userData.filter(data => data.onlineStatus === "online").length} active )
            </span>
        </div>
    )
}

export default ExampleChatListHeader;