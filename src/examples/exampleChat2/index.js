import React from 'react';
import { ChatListProvider, ChatListHeader } from '../../components';
import { userData } from '../../data';
import ExampleChatListHeader from './ExampleChatListHeader';

const ExampleChat = () => {
    return (
        <div>
            <ChatListProvider 
            userData={userData}
            chatProviderClass="chat-provider-theme"
            >

            <ExampleChatListHeader />

            </ChatListProvider>
        </div>
    )
}

export default ExampleChat;