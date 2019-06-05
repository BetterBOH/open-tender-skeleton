import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const DetailItemRow = React.memo(({ label, icon, value }) =>
  RegistryLoader({ label, icon, value }, 'components.DetailItemRow', () =>
    import('./presentation.js')
  )
);

DetailItemRow.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired
};

DetailItemRow.defaultProps = {
  label: null,
  icon: null,
  value: ''
};

export default DetailItemRow;
