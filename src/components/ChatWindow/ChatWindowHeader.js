import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.img`
border-radius: 50%;
`;

const UserName = styled.span`
  text-transform: capitalize;
  flex: 2;
  padding-left: 20px;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '0.9rem'}
`;

const Header = styled.div`
background: $chat-header;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $chat-head-text;
    border-radius: 5px 5px 0 0;
`;

const ChatWindowHeader = (props) => {
  const { myData, handleCloseClick } = props;
  return (
    <Header>
      <Avatar
        src={myData.avatar}
        alt={myData.name.slice(0, 1).toUpperCase()}
      />
      <UserName>
        {myData.name}
      </UserName>
      <div onClick={handleCloseClick}>
        <i className="fas fa-times" />
      </div>
    </Header>
  );
};

ChatWindowHeader.propTypes = {
  myData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleCloseClick: PropTypes.func.isRequired,
};

export default ChatWindowHeader;
