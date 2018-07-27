import React from 'react';
import { ChatListSearch } from '../../components';

const ExampleChatListHeader = (props) => {
    return (
        <div className="chat-header-theme">
                <ChatListSearch chatSearchClass="chat-search-theme" />
            <span className="chat-header-menu-title">
                ( {props.userData.filter(data => data.onlineStatus === "online").length} active )
            </span>
        </div>
    )
}

export default ExampleChatListHeader;