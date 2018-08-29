import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #2f89fc;
  color: #f1f1f1;
  padding: 10px 10px;
`;

const ChatListHeader = (props) => {
  const { userData } = props;
  return (
    <Header>
      <span>
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
