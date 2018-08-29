import styled from 'styled-components';
import PropTypes from 'prop-types';

const ChatInput = styled.div`
  box-shadow: ${({ boxShadow }) => boxShadow};
  height: 35px;
  padding: 2%;
  form {
      display: flex;
      height: 100%;
      padding: 0;
      align-items: center;
      justify-content: space-between;
      font-size: 1em;
  }
`;


ChatInput.propTypes = {
  boxShadow: PropTypes.string,
  padding: PropTypes.string,
};

ChatInput.defaultProps = {
  boxShadow: '0 -5px 16px -5px rgba(35, 43, 43, 0.3)',
  padding: '5px 10px',
};

export default ChatInput;
