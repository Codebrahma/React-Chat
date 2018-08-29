import styled from 'styled-components';
import PropTypes from 'prop-types';

const UserName = styled.span`
  text-transform: capitalize;
  flex: 2;
  padding-left: 20px;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize}
`;

UserName.propTypes = {
  fontSize: PropTypes.string,
};

UserName.defaultProps = {
  fontSize: '0.9em',
};

export default UserName;
