import React from 'react';
import PropTypes from 'prop-types';
import Header from '../customcomponents/Header';

const ChatListHeader = (props) => {
  const { userData } = props;
  return (
    <Header padding="5% 4%">
      <span style={{ fontSize: '0.7em' }}>
Active Users (
        {userData.filter(data => data.onlineStatus === 'online').length}
)
      </span>
    </Header>
  );
};

ChatListHeader.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default ChatListHeader;
