import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = styled.div`
    background: ${({ background }) => background};
    padding: ${({ padding }) => padding};
    margin: 4px;
    word-wrap: break-word;
    font-size: 14px;
    max-width: 60%;
    border-radius: 8px;
    clear: both;
`;

Message.propTypes = {
  background: PropTypes.string,
  padding: PropTypes.string,
};

Message.defaultProps = {
  background: '#b8dff0',
  padding: '8px 10px',
};

export default Message;
