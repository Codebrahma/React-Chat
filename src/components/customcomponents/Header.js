import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
    background: ${({ background }) => background};
    padding: ${({ padding }) => padding};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f1f1f1;
    border-radius: 5px 5px 0 0;
`;

Header.propTypes = {
  background: PropTypes.string,
  padding: PropTypes.string,
};

Header.defaultProps = {
  background: '#2f89fc;',
  padding: '5px 10px',
};

export default Header;
