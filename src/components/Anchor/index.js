import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import linkIsExternal from 'utils/linkIsExternal';

const Anchor = React.memo(props =>
  RegistryLoader(
    { ...props, linkIsExternal: linkIsExternal(props.url) },
    'components.Anchor',
    () => import('./presentation.js')
  )
);

Anchor.propTypes = {
  url: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  linksIsEnternal: PropTypes.bool
};

Anchor.defaultProps = {
  url: null,
  children: null,
  className: null,
  style: null,
  linksIsEnternal: false
};

export default Anchor;
