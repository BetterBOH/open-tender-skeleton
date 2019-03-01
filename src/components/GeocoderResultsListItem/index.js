import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

const GeocoderResultsListItem = React.memo(props => {
  const { option, onSelect } = props;

  return RegistryLoader(
    { option, onSelect },
    'components.GeocoderListItem',
    () => import('./presentation.js')
  );
});

GeocoderResultsListItem.propTypes = {
  option: PropTypes.shape({
    meta: PropTypes.shape({
      address: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string
    })
  }),
  onSelect: PropTypes.func
};

GeocoderResultsListItem.defaultProps = {
  option: {
    meta: {
      address: '',
      street: '',
      city: '',
      state: '',
      country: ''
    }
  },
  onSelect: f => f
};

export default GeocoderResultsListItem;
