import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  uuid: PropTypes.string,
  adapter: PropTypes.string,
  cart: PropTypes.object,
  creditCard: PropTypes.object,
  locationId: PropTypes.number,
  serviceType: PropTypes.string,
  miscOptions: PropTypes.object,
  discountsApplied: PropTypes.array,
  requestedAt: PropTypes.string,
  wantsFutureOrder: PropTypes.bool,
  paymentTypes: PropTypes.string,
  customer: PropTypes.object
});
const defaultProps = {};

export default { propTypes, defaultProps };
