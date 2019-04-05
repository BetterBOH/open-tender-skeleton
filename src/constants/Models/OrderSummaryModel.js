import PropTypes from 'prop-types';
import { PICKUP } from 'constants/OpenTender';
import CustomerModel from 'constants/Models/CustomerModel';

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
