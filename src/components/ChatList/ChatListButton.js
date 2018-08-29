import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.div`
width: 100%; 
height: 50px;
`;

const PopupButton = styled.div`
width: 45px;
height: 45px;
position: fixed;
bottom: 0.5em;
right: 0.5em;
border-radius: 50%;
cursor: pointer;
justify-content: space-around;
align-items: center;
display: grid;
background: rgb(255, 255, 255);
box-shadow: 2px 4px 9px 3px rgba(0, 0, 0, 0.5);
`;

const ChatButton = (props) => {
  const handleClick = () => {
    const { handleChatListProvider } = props;
    handleChatListProvider();
  };

  const { iconClass } = props;

  return (
    <ButtonContainer>
      <PopupButton onClick={handleClick}>
        <i className={iconClass} />
      </PopupButton>
    </ButtonContainer>
  );
};

ChatButton.propTypes = {
  handleChatListProvider: Proptypes.func.isRequired,
  iconClass: Proptypes.string.isRequired,
};

export default ChatButton;
