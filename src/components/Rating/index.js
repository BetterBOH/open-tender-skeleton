import React from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

const Rating = React.memo(props => {
  const { isInteractive, total, icon, rating, onChange } = props;

  return RegistryLoader(
    {
      isInteractive,
      total,
      icon,
      rating,
      onChange
    },
    'components.Rating',
    () => import('./presentation.js')
  );
});

Rating.propTypes = {
  isInteractive: PropTypes.bool,
  total: PropTypes.number,
  rating: PropTypes.number,
  icon: PropTypes.string,
  onChange: PropTypes.func
};

Rating.defaultProps = {
  isInteractive: false,
  total: 5,
  rating: 0,
  icon: 'Star',
  onChange: f => f
};

export default Rating;
