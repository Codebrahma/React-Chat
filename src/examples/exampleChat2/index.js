import React from 'react';
import { ChatListProvider, ChatList, ChatListSearch } from '../../components';
import ExampleChatListHeader from './ExampleChatListHeader';
import ExampleChatListItem from './ExampleChatListItem';
import theme from './style.scss';

const ExampleChat = (props) => {
    return (
        <div>
            <ChatListProvider
                userData={props.userData}
                chatProviderClass="chat-provider-theme"
            >
                <ExampleChatListHeader theme={theme} {...props} />
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