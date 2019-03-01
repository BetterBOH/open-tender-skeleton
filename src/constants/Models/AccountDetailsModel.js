import PropTypes from 'prop-types';
import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';

const propTypes = PropTypes.shape({
  fullName: PropTypes.string,
  email: PropTypes.string,
  defaultAddress: AddressModel,
  defaultPayment: PaymentModel,
  payments: PropTypes.arrayOf(PaymentModel),
  addresses: PropTypes.arrayOf(AddressModel)
});
const defaultProps = {};

export default { propTypes, defaultProps };
