import React from 'react';
import { ChatListProvider, ChatList, ChatListSearch } from '../../components';
import { userData } from '../../data';
import DemoChatWindowHeader from './DemoChatListHeader';


const DemoChatWindowBox = (props) => {
    return (
        <div className="demo-chat-window-box">
            <div className="demo-chat-window">
                <ChatListProvider userData={userData} />
            </div>
            <div className="demo-chat-window">
                <ChatListProvider userData={userData}>
                    <DemoChatWindowHeader userId={props.userId}/>
                    <ChatList />
                    <ChatListSearch />
                </ChatListProvider>
            </div>
        </div>
    )
}

export default DemoChatWindowBox;