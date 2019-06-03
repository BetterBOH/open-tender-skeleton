import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  city: PropTypes.string,
  company: PropTypes.string,
  contact_name: PropTypes.string,
  contact_phone: PropTypes.string,
  created_utc: PropTypes.string,
  customer_address_id: PropTypes.number,
  description: PropTypes.string,
  is_default: PropTypes.bool,
  last_used_utc: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  notes: PropTypes.string,
  state_code: PropTypes.string,
  street_address: PropTypes.string,
  unit: PropTypes.string,
  zip_code: PropTypes.number
});
const defaultProps = null;

export default { propTypes, defaultProps };
