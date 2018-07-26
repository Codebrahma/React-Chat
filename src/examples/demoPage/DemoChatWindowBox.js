import React from 'react';
import { ChatListProvider, ChatList, ChatListSearch } from '../../components';
import DemoChatWindowHeader from './DemoChatListHeader';
import WindowIndex from '../chat-window'


const DemoChatWindowBox = (props) => {
    return (
        <div className="demo-chat-window-box">
            <div className="demo-chat-window">
                <WindowIndex userData={props.userData} {...props}/>
            </div>
            <div className="demo-chat-window">
                <WindowIndex userData={props.userData} {...props}/>
            </div>
        </div>
    )
}

export default DemoChatWindowBox;
