import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';

const propTypes = PropTypes.shape({
  serviceType: PropTypes.string,
  orderTime: PropTypes.string,
  locationName: PropTypes.string,
  locationImage: PropTypes.string,
  customer: CustomerModel.propTypes
});

const defaultProps = {};

export default { propTypes, defaultProps };
