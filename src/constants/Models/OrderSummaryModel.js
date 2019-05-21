import PropTypes from 'prop-types';
import { Constants } from 'brandibble-redux';
import CustomerModel from 'constants/Models/CustomerModel';

const { PICKUP } = Constants.ServiceTypes;

const propTypes = PropTypes.shape({
  serviceType: PropTypes.string,
  orderTime: PropTypes.string,
  locationName: PropTypes.string,
  locationImage: PropTypes.string,
  customer: CustomerModel.propTypes
});

const defaultProps = {
  serviceType: PICKUP,
  customer: CustomerModel.defaultProps
};

export default { propTypes, defaultProps };
