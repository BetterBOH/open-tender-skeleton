import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  credit_amount: PropTypes.number,
  credit_balance: PropTypes.number,
  credit_total: PropTypes.number,
  description: PropTypes.string,
  discount_amount: PropTypes.number,
  discount_name: PropTypes.string,
  earned_for: PropTypes.string,
  is_auto: PropTypes.bool,
  loyalty_type: PropTypes.string,
  name: PropTypes.string,
  orders_current: PropTypes.number,
  orders_total: PropTypes.number,
  progress: PropTypes.number,
  progress_str: PropTypes.string,
  spend_current: PropTypes.number,
  spend_total: PropTypes.number,
  spend_type: PropTypes.string,
  threshold: PropTypes.number,
  threshold_str: PropTypes.string,
  valid_for: PropTypes.string
});
const defaultProps = {};

export default { propTypes, defaultProps };
