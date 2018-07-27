import React from 'react';
import { ChatListProvider, ChatList, ChatListSearch } from '../../components';
import ExampleChatListHeader from './ExampleChatListHeader';
import ExampleChatListItem from './ExampleChatListItem';

const ExampleChat = (props) => {
    return (
        <div>
            <ChatListProvider
                userData={props.userData}
                chatProviderClass="chat-provider-theme"
            >
                <ExampleChatListHeader {...props} />
                <ChatListSearch chatSearchClass="chat-search-theme" />
                <ChatList
                    customChatListItem={ExampleChatListItem}
                    chatListClass="chat-list-theme"
                />

            </ChatListProvider>
        </div>
    )
}

export default ExampleChat;