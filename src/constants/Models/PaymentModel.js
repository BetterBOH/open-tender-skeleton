import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  card_type: PropTypes.string,
  customer_card_id: PropTypes.number,
  is_default: PropTypes.bool,
  is_levelup: PropTypes.bool,
  last4: PropTypes.string
});
const defaultProps = {};

export default { propTypes, defaultProps };
