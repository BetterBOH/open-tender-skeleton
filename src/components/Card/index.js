import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Card = React.memo(({ variant, className, children }) =>
  RegistryLoader({ variant, className, children }, 'components.Card', () =>
    import('./presentation.js')
  )
);

Card.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Card.defaultProps = {
  variant: null,
  className: '',
  children: null
};

export default Card;
