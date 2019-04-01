import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import withBrand from 'lib/withBrand';

const LinkButton = React.memo(props =>
  RegistryLoader(props, 'components.LinkButton', () =>
    import('./presentation.js')
  )
);

LinkButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  iconLeft: PropTypes.string,
  iconLeftFill: PropTypes.string,
  iconRight: PropTypes.string,
  iconRightFill: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.string,
  alt: PropTypes.string,
  brandContext: PropTypes.shape({
    colors: {}
  })
};

LinkButton.defaultProps = {
  className: '',
  children: null,
  iconLeft: null,
  iconLeftFill: 'gray-dark',
  iconRight: 'Right',
  iconRightFill: 'gray-dark',
  onClick: f => f,
  text: null,
  to: null,
  variant: 'primary',
  alt: '',
  brandContext: {
    colors: {}
  }
};

export default withBrand(LinkButton);
