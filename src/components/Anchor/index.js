import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import linkIsExternal from 'utils/linkIsExternal';

const Anchor = React.memo(({ url, children, className, style }) =>
  RegistryLoader(
    { url, children, className, style, linkIsExternal: linkIsExternal(url) },
    'components.Anchor',
    () => import('./presentation.js')
  )
);

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  style: PropTypes.object
};

Anchor.defaultProps = {
  url: '',
  children: null,
  className: '',
  style: null
};

export default Anchor;
