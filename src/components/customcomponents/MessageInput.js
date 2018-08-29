import styled from 'styled-components';
import PropTypes from 'prop-types';

const MessageInput = styled.input`
    font-size: 0.85em;
    border: none;
    outline: none;
    padding: 2% 5%;
    height: 70%;
    width: 100%
`;

MessageInput.propTypes = {
  background: PropTypes.string,
  padding: PropTypes.string,
};

MessageInput.defaultProps = {
  background: '#2f89fc',
  padding: '5px 10px',
};

export default MessageInput;
