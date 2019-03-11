import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const DetailItemRow = React.memo(props =>
  RegistryLoader(props, 'components.DetailItemRow', () =>
    import('./presentation.js')
  )
);

DetailItemRow.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string
};

DetailItemRow.defaultProps = {
  label: '',
  icon: '',
  value: ''
};

export default DetailItemRow;
