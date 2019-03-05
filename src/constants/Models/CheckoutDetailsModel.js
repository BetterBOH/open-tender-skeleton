import PropTypes from 'prop-types';
import PaymentModel from 'constants/Models/PaymentModel';

const propTypes = PropTypes.shape({
  location: PropTypes.string,
  pickupTime: PropTypes.string,
  pickupBy: PropTypes.string,
  contact: PropTypes.string,
  defaultPayment: PaymentModel,
  payments: PropTypes.arrayOf(PaymentModel)
});
const defaultProps = {};

export default { propTypes, defaultProps };
