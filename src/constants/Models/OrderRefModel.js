import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';

const propTypes = PropTypes.shape({
  uuid: PropTypes.string,
  adapter: PropTypes.object,
  cart: PropTypes.object,
  creditCard: PropTypes.object,
  locationId: PropTypes.number,
  serviceType: PropTypes.string,
  miscOptions: PropTypes.object,
  discountsApplied: PropTypes.array,
  requestedAt: PropTypes.string,
  wantsFutureOrder: PropTypes.bool,
  paymentTypes: PropTypes.string,
  customer: CustomerModel.propTypes
});
const defaultProps = {};

export default { propTypes, defaultProps };
