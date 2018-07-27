import React from 'react';
import { ChatListProvider, ChatList } from '../../components';
import ExampleChatListHeader from './ExampleChatListHeader';
import ExampleChatListItem from './ExampleChatListItem';

const ExampleChat = (props) => {

    function handleItemClick(id) {
        console.log(id);
    }
    return (
        <div>
            <ChatListProvider
                userData={props.userData}
                chatProviderClass="example3-chat-provider-theme" handleChatItemClick={handleItemClick}
            >

                <ExampleChatListHeader {...props} />

                <ChatList
                    customChatListItem={ExampleChatListItem}
                    chatListClass="chat-list-theme"
                />

            </ChatListProvider>
        </div>
    )
}

export default ExampleChat;