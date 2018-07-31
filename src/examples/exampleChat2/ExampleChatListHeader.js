import React from 'react';
import { themr } from 'react-css-themr';

const ExampleChatListHeader = (props) => {
    const { theme } = props;
    console.log(theme)
    return (
        <div className={theme.chatHeader}>
            <span className={theme.icon}>
                <i className="fas fa-bars" style={{ color: 'white', background: 'inherit' }}></i>
            </span>
            <span>
                Chat ( {props.userData.filter(data => data.onlineStatus === "online").length} active )
            </span>
        </div>
    )
}

export default themr('ThemedChatHeader')(ExampleChatListHeader);