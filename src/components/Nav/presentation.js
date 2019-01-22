import React from 'react';
import PropTypes from 'prop-types';
import get from 'utils/get';

import { Image } from 'components';

const Nav = props => {
  const logo = get(props, 'brand.logoImage');

  return (
    <div className="Nav relative p1 bg-color-white">
      <Image className="h100" src={logo} />
    </div>
  );
};

Nav.propTypes = {
  brand: PropTypes.shape({
    logoImage: PropTypes.string
  })
};

Nav.defaultProps = {
  brand: {
    logoImage: ''
  }
};

export default Nav;
