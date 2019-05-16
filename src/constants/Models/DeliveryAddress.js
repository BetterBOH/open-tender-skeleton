import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  street_address: PropTypes.string,
  state_code: PropTypes.string,
  city: PropTypes.string,
  zip_code: PropTypes.number,
  unit: propTypes.string
});

const defaultProps = {};

export default { propTypes, defaultProps };
