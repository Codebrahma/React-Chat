import styled from 'styled-components';
import PropTypes from 'prop-types';

const SendButton = styled.button`
background: ${({ background }) => background};
  border: 0;
  color: #2f89fc;
  cursor: pointer;
  i {
      font-size: 16px;
  }
`;

SendButton.propTypes = {
  background: PropTypes.string,
};

SendButton.defaultProps = {
  background: 'none',
};

export default SendButton;
