import PropTypes from 'prop-types';
import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';

const propTypes = PropTypes.shape({
  fullName: PropTypes.string,
  email: PropTypes.string,
  defaultAddress: PropTypes.object,
  defaultPayment: PropTypes.object,
  payments: PropTypes.arrayOf(AddressModel),
  addresses: PropTypes.arrayOf(PaymentModel)
});
const defaultProps = {};

export default { propTypes, defaultProps };
