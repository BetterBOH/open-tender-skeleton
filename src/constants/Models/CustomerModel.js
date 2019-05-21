import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  allergens: PropTypes.arrayOf(PropTypes.string),
  customer_id: PropTypes.number,
  email: PropTypes.string,
  first_name: PropTypes.string,
  is_levelup_connected: PropTypes.bool,
  is_levelup_first: PropTypes.bool,
  last_name: PropTypes.string,
  levelup_connected_email: PropTypes.string,
  levelup_permissions: PropTypes.string,
  phone: PropTypes.string
});

const defaultProps = null;

export default { propTypes, defaultProps };
