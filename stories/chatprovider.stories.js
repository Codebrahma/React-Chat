import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChatListProvider } from '../src/components';
import { userData } from '../src/data.js';

import './styles.scss';

const ChatProviderDemo = () => {
    return (
        <div>
            <div className="chat-provider-demo">
                <ChatListProvider userData={userData} />
            </div>
            <hr className="separator" />
            <div className="demo-info-container">
                <p>Example of default Chat Component.</p>
                <p>View implementation details on <a href="https://github.com/Codebrahma/React-Chat/tree/master/">Github</a></p>
            </div>
        </div>
    )
}


storiesOf('Basic Usage', module)
    .add('ChatProvider Default', () => {
        return <ChatProviderDemo />
    })

