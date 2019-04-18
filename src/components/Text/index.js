import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Text = React.memo(props =>
  RegistryLoader(props, 'components.Text', () => import('./presentation.js'))
);

Text.propTypes = {
  htmlFor: PropTypes.string,
  elem: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object
};

Text.defaultProps = {
  htmlFor: '',
  elem: 'span',
  children: null,
  className: null,
  size: 'body',
  style: null
};

export default Text;
