import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../customcomponents/Avatar';
import UserName from '../customcomponents/UserName';
import Header from '../customcomponents/Header';

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
