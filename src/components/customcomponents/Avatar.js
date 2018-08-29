import styled from 'styled-components';
import PropTypes from 'prop-types';

const Avatar = styled.img`
  border-radius: 50%;
  height: ${({ height }) => height};
`;

Avatar.propTypes = {
  height: PropTypes.string,
};

Avatar.defaultProps = {
  height: '37px',
};

export default Avatar;
