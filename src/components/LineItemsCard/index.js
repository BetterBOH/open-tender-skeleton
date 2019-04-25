import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';
import CustomerModel from 'constants/Models/CustomerModel';

const LineItemsCard = props => {
  return RegistryLoader(props, 'components.LineItemsCard', () =>
    import('./presentation.js')
  );
};

LineItemsCard.propTypes = {
  items: PropTypes.arrayOf(LineItemModel.propTypes),
  isConfigurable: PropTypes.bool,
  showItemsWithoutQuantity: PropTypes.bool,
  customer: CustomerModel.propTypes
};

LineItemsCard.defaultProps = {
  items: [],
  isConfigurable: true,
  showItemsWithoutQuantity: true,
  customer: CustomerModel.propTypes
};

export default LineItemsCard;
