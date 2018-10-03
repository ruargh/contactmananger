import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <div>
      {/* <h1 style={{ color: 'red', fontSize: '3rem' }}>{branding}</h1> */}
      {/* <h1 style={headingStyle}>{branding}</h1> */}
      <h1>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

/*--- Just example ---*/
// const headingStyle = {
//   color: 'green',
//   fontSize: '50px'
// };

export default Header;
